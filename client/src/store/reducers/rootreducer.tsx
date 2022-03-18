import { combineReducers } from 'redux';
import store from '../store';
import blogReducer from './blogreducer';
import loginReducer from './loginreducer';


const rootreducer = combineReducers({
    login: loginReducer,
    posts: blogReducer
});

export default rootreducer