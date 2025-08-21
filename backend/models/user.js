const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}, //email, password, and username are required for an account but socials are not
    username: {type: String, required: true},
    linkedin: {type: String, required: false},
    github: {type: String, required: false}
}, 
{timestamps: true});

//hashing passwords for security, so passwords arent stored as plain text in DB

UserSchema.pre("save", async function (next){
    if (!this.isModified('password')) {
        return next();
    }
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;