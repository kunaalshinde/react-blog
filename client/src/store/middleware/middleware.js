import { LoginSuccess, Logout } from "../actionTypes";


export function thunkMiddleware({dispatch, getState}) {
    return (next) => action => typeof action === "function" ? 
                                action(dispatch, getState) :
                                next(action)
}

export const persistData = store => next => action => {
    let localState = localStorage.getItem('user');
    if(localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }
    else {
        localStorage = Object.assign({}, {user: action.payload});
    }

    let result;
    let newAction;
    switch(action.type)
    {
        case LoginSuccess: newAction = {type: action.type};
                            newAction.payload = localState;
                            localStorage.setItem('user', JSON.stringify(localState));
                            result = next(newAction);
                            return result;

        case Logout: newAction = { type: action.type }
                     newAction.payload = {
                        username: "",
                        fullname: "",
                        email: "",
                        profilePic: "",
                    }
                    localStorage.setItem('user', JSON.stringify(localState));
                    result = next(newAction)
                    return result;

        default: return next(action);
    }
}