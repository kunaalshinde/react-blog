import express,  { Request, Response} from 'express';
import { User } from '../models/User';
import { Blog } from '../models/Blog';

const router = express.Router();

//Update User Details
router.put("/:id", async (req: Request, res: Response) => {
    if(req.body.userId === req.params.id) {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new: true});
            // res.status(200).json(updatedUser);
            res.status(200).json('User updated successfully.')
        }
        catch(err) {
            res.status(200).json(err);
        }
    }
    else 
        res.status(500).json('You can update only your account');
});


// Delete User
router.delete("/:id", async (req: Request, res: Response) => {
    if(req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                // operator (?.) checks if obejct is null or not
                await Blog.deleteMany({ username: user?.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json('User has been deleted.')
            }
            catch(err) {
                res.status(500).json(err);
            }
        }
        catch(err) {
            res.status(404).json('User NOT found ');
        }
    }
    else 
        res.status(500).json('You can delete only your account');
});


// Get User
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        // const {password, ...other} = user?._doc;
        res.status(200).json(user);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

export { router as userRoute }