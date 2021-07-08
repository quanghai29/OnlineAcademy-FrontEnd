import { combineReducers } from 'redux';
import courses from './courses';
import hotCourses from './hotCourses';

export default combineReducers({
    courses,
    hotCourses
});