import { createStore } from "redux";

const login = () => {
    return ({
        type: 'LOGIN'
    });
}

const logout = () => {
    return ({
        type: 'LOGOUT'
    });
}

const loginReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN' : return true;
        case 'LOGOUT' : return false;
    }
}

const store = createStore(loginReducer);
export default store;