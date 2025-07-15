const express = require('express')
const router = express.Router();


const User = require('./../models/user');
const bcrypt = require('bcrypt');

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
})

module.exports = router