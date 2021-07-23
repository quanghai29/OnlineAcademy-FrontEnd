import { combineReducers } from 'redux';
import courses from './courses';
import signUpReducer from './signUp.js';
import verifyCodeReducer from './verifyCode';
import hotCourses from './hotCourses';
import coursesOfLecturer from './coursesOfLecturer';
<<<<<<< HEAD
import selectedCourse from './selectedCourse';

export default combineReducers({
  courses,
  hotCourses,
  coursesOfLecturer,
  signUpReducer,
  verifyCodeReducer,
  selectedCourse,
});
=======
import loginReducer from './login';
import videoLoader from './videoloader';
import courseOverview from './courseOverview';

export default combineReducers({
    courses,
    hotCourses,
    coursesOfLecturer,
    signUpReducer, verifyCodeReducer, loginReducer,
    videoLoader, courseOverview
});
>>>>>>> 2a9f53ee66c015fa8a786a68dc09ca6efe4dde9e
