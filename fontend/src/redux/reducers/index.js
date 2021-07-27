import { combineReducers } from 'redux';
import courses from './courses';
import signUpReducer from './signUp.js';
import verifyCodeReducer from './verifyCode';
import hotCourses from './hotCourses';
import coursesOfLecturer from './coursesOfLecturer';
import loginReducer from './login';
import searchCourseReducer from './searchCourse';
import videoLoader from './videoloader';
import courseOverview from './courseOverview';
import selectedCourse from './selectedCourse';
import courseComments from './courseComments';

export default combineReducers({
  courses,
  hotCourses,
  coursesOfLecturer,
  signUpReducer,
  verifyCodeReducer,
  loginReducer,
  searchCourseReducer,
  videoLoader,
  courseOverview,
  selectedCourse,
  courseComments,
});
