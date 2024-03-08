const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    userToken: String,
    email: String,
    password: String,
    name: String,
    questionsSolved: Number,
    correctAnswers: Number,
    inCorrectAnswers: Number
}) 

const UsersModel = mongoose.model('pii', UsersSchema);
module.exports = UsersModel;