import { combineReducers } from 'redux';
import courses from './courses';
import signUpReducer from './signUp.js';
import verifyCodeReducer from './verifyCode';

export default combineReducers({
    courses, signUpReducer, verifyCodeReducer
});