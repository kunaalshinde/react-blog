import * as actionTypes from  './actionTypes'

export const login = () => {
    console.log('loggin')
    return ((dispatch: any) => dispatch({
    type: 'LOGIN', 
}))}

export const logout = () => {
    return ((dispatch: any) => dispatch({
    type: 'LOGOUT',
}))}

export const register = () => {
    return ((dispatch: any) => dispatch({
    type: 'REGISTER',
}))}