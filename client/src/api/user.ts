import axios from "axios";

interface RUser {
    username: string,
    fullname: string,
    email: string,
    password: string
}

interface LUser {
    username: string,
    password: string
}

export const signup = (user: RUser) => axios.post("/auth/register", user);

export const login = (user: LUser) => axios. post("/auth/login", user);