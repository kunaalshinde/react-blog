import { Login, Logout, Register } from "./actionTypes";

export const login = () => {
    console.log('loggin')
    return (dispatch => dispatch({
    type: 'LOGIN', 
}))}

export const logout = () => {
    return (dispatch => dispatch({
    type: 'LOGOUT',
}))}

export const register = () => {
    return (dispatch => dispatch({
    type: 'REGISTER',
}))}