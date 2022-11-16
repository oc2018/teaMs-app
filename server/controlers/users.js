import Users from "../models/users.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const signUp = async(req, res) => {
    const {firstName, lastName, password, confirmPassword, email } = req.body;

    try {

        const isExistingUser =  await Users.findOne({ email });

        if(isExistingUser) return res.status(404).json({ message: `user with this email aready exists`});

        if(password !== confirmPassword ) return res.status(404).json({ message: `Password does not match confirm password`});
           
        const hashedPassword = await bcrypt.hash( password, 12 );

        const result = await Users.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`});

        const token = jwt.sign({ email: result.email, id:result._id}, 'secret', {expiresIn: '1h'});

        res.status(200).json({ result, token });
    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }      
    }


    export const signIn = async(req, res) => {
        const { email, password } = req.body;

        const isExistingUser =  await Users.findOne({ email });

        if(!isExistingUser) return res.status(404).json({ message: `Users doesn't exist`});

        const isPasswordCorrect = await bcrypt.compare(password, isExistingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({ message: `Invalid Credentials`});

        const token =  jwt.sign({ email: isExistingUser.email, id:isExistingUser._id}, 'secret', {expiresIn: '12h'});

        res.status(200).json({ result: isExistingUser, token });

    }
   