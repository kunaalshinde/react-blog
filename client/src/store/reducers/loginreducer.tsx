import { LoginStart, LoginFailure, LoginSuccess, Logout, Register } from "../actionTypes";
import { UserType } from "../../types.d";

const initialState: UserType = {
    user: {
        email: "",
        fullname: "",
        username: "",
    },
    isLogged: false,
    isRegistered: false,
    isFetching: false,
}

export default function loginReducer(state = initialState, action: { type: string, payload?: any}): UserType  {
    switch(action.type) {
        case LoginStart: return {
                            ...state,
                            isFetching: true
                        }

        case LoginSuccess: return {
                            ...state,
                            user: action.payload,
                            isFetching: false,
                            isLogged: true
                        }

        case LoginFailure: return {
                            ...state,
                            isFetching: false,
                            isLogged: true,
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
