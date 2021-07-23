import { combineReducers } from 'redux';
import courses from './courses';
import signUpReducer from './signUp.js';
import verifyCodeReducer from './verifyCode';
import hotCourses from './hotCourses';
import coursesOfLecturer from './coursesOfLecturer';
import selectedCourse from './selectedCourse';

export default combineReducers({
  courses,
  hotCourses,
  coursesOfLecturer,
  signUpReducer,
  verifyCodeReducer,
  selectedCourse,
});
