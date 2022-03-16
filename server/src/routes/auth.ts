import express,{ Request, Response } from 'express';
import bcrypt from 'bcrypt'; 
import { User } from '../models/User';

const router = express.Router();

//Register
// If duplicate username or email then returns 500 status
// Have to implment feature in which it tells if username iss taken or email is already registered
router.post("/register", async (req: Request, res: Response) => {
    try {
        // const salt = await bcrypt.genSalt(11);
        // const hashedPass = await bcrypt.hash(req.body.password, salt);
        const username = req.body.username;
        // let findUser = await User.findOne({username});
        // if(findUser)
        //     res.status(404).json('Username NOT available.')
        const email = req.body.email;
        // findUser = await User.findOne({email});
        // if(findUser)
        //     res.status(404).json('Email already registered.')
        const password = req.body.password;
        const fullname = req.body.fullname;
        const newUser =  User.build({username, fullname, email, password});
        const user = await newUser.save();
        res.status(200).json(user);
        // res.status(200).json('Registered Successfully!');
    }
    catch(err) {
        res.status(500).json(err);
    }
});


// Login
router.post("/login", async (req: Request, res: Response) => {
    try {
        const user = await User.findOne({username: req.body.username});
        !user && res.status(400).json('Wrong Credentials!');

        const validate = await req.body.password === user?.password;
        !validate && res.status(400).json('Wrong Credentials!');

        res.status(200).json(user);
        // res.status(200).json('Login Successfully');
    }
    catch(err) {
        res.status(500).json(err);
    }
});

export { router as authRoute }