
const initialState = {
    user: {
        id: 0,
        fullname: "",
        email: "",
        password: "",
        isLogged: false,
        isRegistered: false,
        draftBlogs: [{
            id: 0,
            title: "",
            body: "",
            shouldDraft: false,
        }]
    }
}

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

const register = () => {
    return ({
        type: 'REGISTER'
    });
}

export default function loginReducer(state = false, action)  {
    switch(action.type) {
        case 'LOGIN' : return true;
        case 'LOGOUT' : return false;
        default: return state;
    }
}
