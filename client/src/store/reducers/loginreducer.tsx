import { LoginStart, LoginFailure, LoginSuccess, Logout, Register } from "../actionTypes";
import { UserType } from "../../types.d";

const localUser = localStorage.getItem("user")

const initialState: UserType = {
    user: (localUser !== null) ? JSON.parse(localUser) :
    ({
        email: "",
        fullname: "",
        username: "",
        profilePic: "",
    })
    ,
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
        case Logout :  return {
                            ...state,
                            user: {
                                username: "",
                                fullname: "",
                                email: "",
                                profilePic: "",
                            },
                            isFetching: false,
                            isLogged: false
                        }
        case Register: return {
                            ...state,
                            isRegistered: true
                        }
        default: return state;
    }
}
