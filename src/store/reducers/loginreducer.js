import { Login, Logout, Register } from "../actionTypes";

const initialState = {
    isLogged: false,
    isRegistered: false,
}

export default function loginReducer(state = initialState, action)  {
    switch(action.type) {
        case Login : return {
                            ...state,
                            isLogged: true
                        }
        case Logout : return {
                            ...state,
                            isLogged: false
                        }
        case Register: return {
                            ...state,
                            isRegistered: true
                        }
        default: return state;
    }
}
