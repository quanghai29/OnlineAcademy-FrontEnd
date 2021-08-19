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
import latestCourses from './latestCourses';
import mostViewCourses from './mostViewCourses';
import courseComments from './courseComments';
import uploadCourse from './uploadCourse';
import courseLearning from './courseLearning';
import userProfile from './userProfile';
import videoLearning from './videoLearning';
import adminCategoryReducer from './admin_category';
import favoriteCourse from './favoriteCourse';
import registerCourse from'./registerCourse';
import chaptersOfCourse from './chaptersOfCourse';
import selectedChapter from './selectedChapter';
import header from './header';
import adminStudentReducer from './admin_student';
import adminLecturerReducer from './admin_lecturer';
import courseCategory from './courseCategory';
import selectedVideo from './seletedVideo';
import studentCourseRegister from './studentCourseRegister';
import studentCourseWatchlist from './studentCourseWatchlist';
import category from './category';
import relatedCourse from './relatedCourse';
import adminCourseReducer from './admin_course';
import stateStudentVideoLearning from './stateStudentVideoLearning';
import forgotPasswordReducer from './forgotPassword';
import hotCategories from './hotCategories';

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
  latestCourses,
  mostViewCourses,
  courseComments,
  uploadCourse,
  courseLearning,
  userProfile,
  videoLearning,
  adminCategoryReducer,
  favoriteCourse,
  registerCourse,
  chaptersOfCourse,
  selectedChapter,
  header,
  adminStudentReducer,
  adminLecturerReducer,
  courseCategory,
  selectedVideo,
  studentCourseRegister,
  studentCourseWatchlist,
  category,
  relatedCourse,
  adminCourseReducer,
  stateStudentVideoLearning,
  forgotPasswordReducer,
  hotCategories
});
