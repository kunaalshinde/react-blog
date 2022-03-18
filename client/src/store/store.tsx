import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers/rootreducer'
import { persistData, thunkMiddleware } from "./middleware/middleware";

const initialState = {  }

const middleware = [thunk]

const saveUser = (state: any) => {
    try {
        const localUser = JSON.stringify(state);
        localStorage.setItem('user', localUser);
    }
    catch(err) {}
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunkMiddleware
        , persistData)
    // compose(
        // applyMiddleware(...middleware)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
);

store.subscribe(() => {
    saveUser(store.getState().login.user);
})

export default store;