import { combineReducers } from 'redux';
import courses from './courses';
import hotCourses from './hotCourses';
import coursesOfLecturer from './coursesOfLecturer';

export default combineReducers({
    courses,
    hotCourses,
    coursesOfLecturer
});