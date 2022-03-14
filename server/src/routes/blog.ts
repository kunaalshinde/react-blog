import express, { request, Request, Response } from 'express';
import { Blog } from '../models/Blog';

const router = express.Router();

// Create Blog
router.post("/", async (req: Request, res: Response) => {
     const newBlog = Blog.build(req.body);
     try {
        await newBlog.save();
        res.status(200).json('Blog saved successfully.')
     }
     catch(err) {
         res.status(500).json(err);
     }
});


// Update Blog
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if(blog?.username === req.body.username) {
            try {
                const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                }, {new: true} );
                res.status(200).json('Blog Updated.');
            }
            catch(err) {
                res.status(500).json('Blog NOT found');
            }
        }
        else {
            res.status(401).json('You can update only your blogs.')
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});


// Delete Blog
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if(blog?.username === req.body.username) {
            try {
                await blog?.delete();
                res.status(200).json('Blog Deleted .');
            }
            catch(err) {
                res.status(500).json('Blog NOT found');
            }
        }
        else {
            res.status(401).json('You can delete only your blogs.')
        }
    }
    catch(err) {
        res.status(500).json(err);
    }
});


// Get Blog
router.get("/:id", async (req: Request, res:Response) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json(blog);
    }
    catch(err) {
        res.status(500).json(err);
    }
});


// Get ALL Blogs of particular author or ALL blogs of site
router.get("/", async (req: Request, res: Response) => {
    const username = req.query.user;
    try {
        let blogs;
        blogs = await Blog.find(username? {username} : {});
        res.status(200).json(blogs);
    }
    catch(err) {
        res.status(500).json(err);
    }
});

export { router as blogRoute }