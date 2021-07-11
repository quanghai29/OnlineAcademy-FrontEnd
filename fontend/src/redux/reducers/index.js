import { combineReducers } from 'redux';
import courses from './courses';
<<<<<<< HEAD
import signUpReducer from './signUp.js';
import verifyCodeReducer from './verifyCode';

export default combineReducers({
    courses, signUpReducer, verifyCodeReducer
=======
import hotCourses from './hotCourses';
import coursesOfLecturer from './coursesOfLecturer';

export default combineReducers({
    courses,
    hotCourses,
    coursesOfLecturer
>>>>>>> 54eebeb5ea482683873a8d7d8f2b53d46aa601e8
});