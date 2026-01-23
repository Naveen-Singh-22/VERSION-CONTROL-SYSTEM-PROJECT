const mongoose = require("mongoose");
const { schema } = mongoose;

const userSchema = new schema({
    username: {
        type: String,   
        required: true,
        unique: true,
    },  
    password: {
        type: String,
        required: true,
    },
    repositories: [
        {
            type: schema.Types.ObjectId,
            ref: "Repository",
        },
    ],  
    followedUsers: [
        {
            type: schema.Types.ObjectId,
            ref: "Users",
        },
    ],  
     starRepos: [
        {
            type: schema.Types.ObjectId,
            ref: "Repository",
        },
    ],
});

const User = mongoose.model("User", UserSchema);
export default User;
