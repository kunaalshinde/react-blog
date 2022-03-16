import { UserType } from "../types"

export const loginstart = (userCredentials : UserType) => {
    console.log('loggin')
    return ((dispatch: any) => dispatch({
    type: 'LOGIN_START', 
}))}

export const loginsuccess = (user: UserType) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
})

export const loginfailure = () => ({
    type: 'LOGIN_FAILURE'
})

export const logout = () => {
    return ((dispatch: any) => dispatch({
    type: 'LOGOUT',
}))}

export const register = () => {
    return ((dispatch: any) => dispatch({
    type: 'REGISTER',
}))}

