const mongoose = require("mongoose");
const { default: Repository } = require("./repoModel");
const { schema } = mongoose;

const IssueSchema = new schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ["open",  "closed"],
        default: "open",
    },
    Repository: {
        type: schema.Types.ObjectId,
        ref: "Repository",  
        required: true,
    },
});
const Issue = mongoose.model("Issue", IssueSchema);
export default Issue;