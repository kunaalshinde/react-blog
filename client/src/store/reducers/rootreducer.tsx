import { combineReducers } from 'redux';
import blogReducer from './blogreducer';
import loginReducer from './loginreducer';


 const rootreducer = combineReducers({
login: loginReducer,
blogs: blogReducer
});

export default rootreducer