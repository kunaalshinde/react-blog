import express,{ Request, Response } from 'express';
import bcrypt from 'bcrypt'; 
import { User } from '../models/User';

const router = express.Router();

//Register
router.post("/register", async (req: Request, res: Response) => {
    try {
        // const salt = await bcrypt.genSalt(11);
        // const hashedPass = await bcrypt.hash(req.body.password, salt);
        const password = req.body.password;
        const username= req.body.username;
        const email = req.body.email;
        const newUser =  User.build({username, email, password});
        const user = await newUser.save();
        res.status(200).json(user);
        // res.status(200).json('Registered Successfully!');
    }
    catch(err) {
        res.status(500).json(err);
    }
});

router.post("/login", async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(200).json('Wrong Credentials!');

        const validate = await req.body.password === user?.password;
        !user && res.status(200).json('Wrong Credentials!');

        res.status(200).json(user);
        // res.status(200).json('Login Successfully');
    }
    catch(err) {
        res.status(500).json(err);
    }
});

export { router as authRoute }