const mongoose = require('mongoose');

const UsersSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String
}) 

const UsersModel = mongoose.model('pii', UsersSchema);
module.exports = UsersModel;