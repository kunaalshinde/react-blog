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

//Register
export const signup = (user: RUser) => axios.post("/auth/register", user);
//Login
export const login = (user: LUser) => axios. post("/auth/login", user);
//Fetch Fullname given the username
export const fetchuser = (uname: any) => axios.get(`/auth/:${uname}`);