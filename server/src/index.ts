import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { json } from 'body-parser';
import { todoRoute } from './routes/todo';
import { authRoute } from './routes/auth';
import { userRoute } from './routes/user';
import { blogRoute } from './routes/blog';

dotenv.config();
const app = express();
app.use(json());
app.use(todoRoute);


const PORT = process.env.PORT || 5000;

mongoose
.connect(`${process.env.MONGO_URL}`,{
    // useCreateIndex: true,
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => {console.log('Connected to Database')})
.catch(err => console.log(err));

app.use("/server/auth", authRoute);
app.use("/server/user/", userRoute);
app.use("/server/blogs/", blogRoute);

app.listen(PORT, () => {
    console.log(`Server Connected on ${PORT}`);
});