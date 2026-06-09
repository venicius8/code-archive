const mongoose = require("mongoose");

const createSchema = mongoose.Schema({
    authorId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 30,
    },
    content: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 1000,
    }
}, { timestamps: true });

module.exports = mongoose.model("Content", createSchema);
