const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Por favor, insira um Email!"],
        unique: [true, "Email existente."],
    },

    password: {
        type: String,
        required: [true, "Por favor, insira uma senha!"],
        unique: false,
    },
})

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
