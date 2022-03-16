import { UserType } from "../types"

export const loginstart = (userCredentials : UserType) => {
    // console.log('loggin')
    return ((dispatch: any) => dispatch({
    type: 'LOGIN_START', 
}))}

export const loginsuccess = (user: UserType) => {
    return ((dispatch: any) => dispatch({
        type: 'LOGIN_SUCCESS',
    payload: user,
}))}

export const loginfailure = () => {
    return ((dispatch: any) => dispatch({
        type: 'LOGIN_FAILURE'
}))}

export const logout = () => {
    // console.log('logout')
    return ((dispatch: any) => dispatch({
    type: 'LOGOUT',
}))}

export const register = () => {
    return ((dispatch: any) => dispatch({
    type: 'REGISTER',
}))}

