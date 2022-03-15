import axios from "axios";

interface IUser {
    username: string,
    email: string,
    password: string
}

export const signup = (user: IUser) => axios.post("/auth/register", user);