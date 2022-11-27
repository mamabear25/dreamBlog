const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema ({
    title: {
        type: String,
        required:  true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
        required: false,

    },
    username: {
        type: String,
        required: true
    },
    categories: {
        type: Array,
        required: false
    },
    reading_time: {
        type: String
    },
    read_count: {
        type: Number,
        default: 0
    },
}, {timestamps: true}
);


// export model
module.exports = mongoose.model("Post", PostSchema);
