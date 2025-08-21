const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserOTPVerificationSchema = new Schema({
    userId: {type: String, required: true},
    otp: {type: String, required: true},
    createAt: {type: Date, default: Date.now},
    expiresAt: {type: Date, required: true},
});

UserOTPVerificationSchema.index({ "expiresAt": 1}, {expireAfterSeconds: 0});

module.exports = mongoose.model("UserOTPVerification", userOTPSchema);
