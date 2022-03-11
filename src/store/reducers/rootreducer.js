import { combineReducers } from 'redux';
import loginReducer from './loginreducer';


 const rootreducer = combineReducers({
login: loginReducer
});

export default rootreducer