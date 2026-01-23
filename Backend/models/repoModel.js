import { required } from "yargs";

const mongoose = require("mongoose");
const { schema } = mongoose;

const RepositorySchema = new schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    content: [ 
        {
            type: String,
            required: true, 
        }
    ],
    visibility: {
        type: Boolean,
    },
    owner: {
        type: schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    issues: [
        {
            type: schema.Types.ObjectId,
            ref: "Issue",
        }
    ],

});

const Repository = mongoose.model("Repository", RepositorySchema);
export default Repository;