import mongoose from "mongoose";

interface IBlog {
    title: string,
    body: string,
    published: string,
    username: string,
    imageURL: string,
}

interface BlogModelInterace extends mongoose.Model<BlogDoc> {
    build(attr: IBlog): BlogDoc
}

interface BlogDoc extends mongoose.Document {
    title: string,
    body: string,
    published: string,
    username: string,
    imageURL: string,
}

const BlogSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        published: {
            type: String,
            required: true
        },
        imageURL: {
            type: String,
            default: "",
        }
    },
    {timestamps: true}
);

const Blog = mongoose.model<BlogDoc, BlogModelInterace>('Blog', BlogSchema);

Blog.build = (attr: IBlog) => {
    return new Blog(attr);
}

export { Blog } 