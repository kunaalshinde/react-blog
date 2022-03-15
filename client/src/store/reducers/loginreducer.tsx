import { Login, Logout, Register } from "../actionTypes";
import { LoginType } from "../../types.d";

const initialState: LoginType = {
    isLogged: false,
    isRegistered: false,
}

export default function loginReducer(state = initialState, action: { type: string}): LoginType  {
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
