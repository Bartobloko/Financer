const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {save, findByEmail} = require("../models/user");

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {return res.status(400).json({errors: errors.array()});}

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const userDetails = {
            name: name,
            email: email,
            password: hashedPassword
        }

        const result = await save(userDetails);

        res.status(201).json({ message: 'User registered successfully!.' });
    } catch (err){
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }
}

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    try{
        const user = await findByEmail(email)

        if (user[0].length !== 1) {
            const error = new Error('A user with this email could not be found');
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];
        const isEqual = await bcrypt.compare(password, storedUser.password);

        if(!isEqual){
            const error = new Error('Wrong password');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign(
            {
            email: storedUser.email,
            userId: storedUser.id,
            },
            'secret',
            {expiresIn: '1h'}
        )
        res.status(200).json({ token: token, userId: storedUser.id });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err)
    }

}