const express = require('express')
const router = express.Router();
const UserOTPVerification = require('../models/UserOTPVerification');
const sendEmail = require('../utils/sendEmail');
const User = require('./../models/user');
const bcrypt = require('bcrypt');
const generateOTP = () => Math.floor(10000 + Math.random() * 90000).toString(); //generates random 5 digit code

router.post('/signup', async (req, res) => {
    const {email, password, username, linkedin, github} = req.body;
    const existing = await User.findOne({email});
    if(existing){ //check if user already exists
        return res.status(400).json({message: 'Given email already has an existing account'})
    }

    const otp = generateOTP();
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000); // expires in 5 minutes
    await UserOTPVerification.create({email, otp, expiresAt});
    await sendEmail(email,otp);
    res.status(200).json({message: 'OTP sent to email'});

});

router.post('/signup-otp', async(req, res) => {
    const {email, otp, password, username, linkedin, github} = req.body;
    const record= await UserOTPVerification.findOne({email});
    if(!record){
        return res.status(400).json({message: "Verification code not found"});
    }
    if(record.expiresAt < Date.now()){
        return res.status(400).json({message: "The verification code has expired"});
    }
    if(record.otp !== otp){
        return res.status(400).json({message: "Incorrect verification code"});
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({email, password, username, linkedin, github});
    await newUser.save();

    await UserOTPVerification.deleteOne({email});
    res.status(200).json({message: "Signup code removed from DB & Signup successful"});
    //Need to finish the verify for password change
});

router.post('/forgot-password', async (req, res) => {

});


router.post('/api/v1/signup', (req, res) => {
    let{email, password, username, linkedin, github} = req.body;
    console.log("Before: ", req.body)
    email = (email || "").trim();
    password= (password || "").trim();
    username = (username || "").trim();
    linkedin = (linkedin || "").trim();
    github = (github || "").trim();
    console.log("After: ", email, password, username, linkedin, github)
    
    
    if (username == "" || email == "" || password == "" || linkedin == "" || github == ""){
        res.json({
            status: "FAIL",
            message: "Empty input fields!"
        });
    }
    else if(!/^[a-zA-Z0-9_]{3,}$/.test(username)){
        res.json({
            status: "FAILED",
            message: "Invalid name entered(Only special character: '_' ) Make sure its over 3 characters"
        })
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    }
    /*else if(!/^[a-zA-Z0-9_]{3,}$/.test(linkedin)){
        res.json({
            status: "FAILED",
            message: "Invalid linkedin entered(Only special character: '_' ) Make sure its over 3 characters"
        })
    }
    else if(!/^[a-zA-Z0-9_]{3,}$/.test(github)){
        res.json({
            status: "FAILED",
            message: "Invalid github entered(Only special character: '_' ) Make sure its over 3 characters"
        })
    }*/
    else if(password.length < 8){
        res.json({
            status: "FAILED",
            message: "Password too short"
        })
    }
    else{
        //check if user alr exists
        User.find({email}).then(result => {
            if(result.length){
                res.json({
                    status: "FAILED",
                    message: "User with the provided email already exists"
                })
            }
            else{
                //try to create new user


                //pw handling
                const saltRounds = 10;
                bcrypt.hash(password, saltRounds).then(hashedpassword => {
                    const newUser = new User({
                        email,
                        password: hashedpassword,
                        username,
                        linkedin,
                        github
                    })
                    newUser.save().then(result=>{
                        res.json({
                            status: "SUCCESS",
                            message: "Signup successful",
                            data: result,
                        })
                    })
                    .catch(err =>{
                        res.json({
                            status: "FAILED",
                            message: "An error occurred while saving user account!"
                        })
                    })
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occured while hashing password!"
                    })
                })

            }

        }).catch(err => {
            console.log(err);
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user"
            })
        })
    }
    
})
router.post('/api/v1/signin', (req, res) => {
    let {email, password} = req.body;
    email = email.trim();
    password = password.trim();

    if(email == "" || password == "") {
        res.json({
            status: "FAILED",
            messasge: "Empty credentials supplied"
        })
    }
    else{
        User.find({email})
        .then(data => {
            if (data) {
                //user exists

                const hashedPassword = data[0].password;
                bcrypt.compare(password, hashedPassword).then(result => {
                    if (result){
                        res.json({
                            status: "SUCCESS",
                            message: "Signin successful",
                            data: data
                        })
                    }
                    else{
                        res.json({
                            status:"FAILED",
                            message: "Invalid password entered"
                        })
                    }
                })
                .catch(err => {
                    res.json({
                        status: "FAILED",
                        message: "An error occurred while comparing"
                    })
                })
            }
            else{
                res.json({
                    status: "Failed",
                    message: "Invalid credentials entered"
                })
            }
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred while checking for existing user"
            })
        })
    }
});

module.exports = router