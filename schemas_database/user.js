const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    surname: { type: String, required: true, minlength: 3, maxlength: 50 },
    secondSurname: { type: String, required: true, minlength: 3, maxlength: 50 },
    email: { type: String, required: true, minlength: 10, maxlength: 255, index: true },
    password: { type: String, required: true, minlength: 8, maxlength: 1024 },
    career: { type: String, required: true, minlength: 3, maxlength: 50 },
    admin: { type: Boolean, required: true },
    typeUser: { type: String, required: true, minlength: 3, maxlength: 50 },
});

const user = mongoose.model('user', userSchema);

module.exports = user;
