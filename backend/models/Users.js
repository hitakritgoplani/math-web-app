const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    standard: Number,
    divison: String,
    rollNo: Number, 
    childName: String,
    parentEmail: String,
    childName: String,
    stats: {
        correctAddition: Number,
        correctSubtraction: Number,
        correctMultiplication: Number,
        correctDivision: Number,
        correctComparison: Number,
        correctWordProblem: Number,
        inCorrectAddition: Number,
        inCorrectSubtraction: Number,
        inCorrectMultiplication: Number,
        inCorrectDivision: Number,
        inCorrectComparison: Number,
        inCorrectWordProblem: Number
    }
}) 

const UsersModel = mongoose.model('pii', UsersSchema);
module.exports = UsersModel;