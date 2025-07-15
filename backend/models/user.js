const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: String,
    password: String,
    username: String,
    linkedin: String,
    github: String
})

const User = mongoose.model('User', UserSchema);




module.exports = User;