const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 40,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
