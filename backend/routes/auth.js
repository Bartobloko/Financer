const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const { signup, login} = require("../controllers/auth");

router.post(
    '/signup',
    [
        body('name').trim().notEmpty(),
        body('email').isEmail().withMessage('Please enter your email')
            .custom(async (email)=>{
                const user = await User.findByEmail(email);
                if(user[0].length > 0){
                    return Promise.reject('Email address already exists');
                }
            })
            .normalizeEmail(),
        body('password').trim().isLength({min:7})
    ],
    signup
);

router.post('/login', login)

module.exports = router;