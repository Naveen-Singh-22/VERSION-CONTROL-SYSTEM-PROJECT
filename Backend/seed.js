const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

// Define User Schema inline for seeding
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    repositories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Repository",
        },
    ],
    followedUsers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    starRepos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Repository",
        },
    ],
});

const User = mongoose.model("User", userSchema);

async function seedDatabase() {
    try {
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB");

        // Clear existing users (optional - comment out if you want to keep them)
        // await User.deleteMany({});

        // Create demo users
        const demoUsers = [
            {
                username: "johndoe",
                email: "john@example.com",
                password: "password123",
            },
            {
                username: "janedoe",
                email: "jane@example.com",
                password: "password123",
            },
            {
                username: "alice",
                email: "alice@example.com",
                password: "password123",
            },
            {
                username: "bob",
                email: "bob@example.com",
                password: "password123",
            },
            {
                username: "charlie",
                email: "charlie@example.com",
                password: "password123",
            },
        ];

        // Hash passwords and create users
        for (let user of demoUsers) {
            const existingUser = await User.findOne({ username: user.username });
            if (!existingUser) {
                const salt = await bcrypt.genSalt(10);
                const hashedPassword = await bcrypt.hash(user.password, salt);

                const newUser = new User({
                    username: user.username,
                    email: user.email,
                    password: hashedPassword,
                    repositories: [],
                    followedUsers: [],
                    starRepos: [],
                });

                await newUser.save();
                console.log(`✓ Created user: ${user.username}`);
            } else {
                console.log(`✗ User ${user.username} already exists`);
            }
        }

        console.log("\n✓ Database seeding completed!");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding database:", error.message);
        process.exit(1);
    }
}

seedDatabase();
