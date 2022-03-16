import mongoose from "mongoose";
import bcrypt from 'bcrypt';

interface IUser {
    username: string,
    fullname: string,
    email: string,
    password: string,
    profilePic: string
}

interface UserModelInterace extends mongoose.Model<UserDoc> {
    build(attr: IUser): UserDoc
}

interface UserDoc extends mongoose.Document {
    username: string,
    fullname: string,
    email: string,
    password: string,
    profilePic: string,
}

const UserSchema = new mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        profilePic: {
            type: String,
            default: "",
            required: false,
        }
    },
    {timestamps: true}
);

// UserSchema.pre = ('save') => {
//     this.password = bcrypt.hashSync(this.password, 11);
// };

const User = mongoose.model<UserDoc, UserModelInterace>('User', UserSchema);


User.build = (attr: IUser) => {
    return new User(attr);
}

export { User } 