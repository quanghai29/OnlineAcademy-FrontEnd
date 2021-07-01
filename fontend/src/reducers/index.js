import { combineReducers } from 'redux';
import courses from './courses';
import selectedCourse from './selectedCourse';

export default combineReducers({
    courses,
    selectedCourse
});