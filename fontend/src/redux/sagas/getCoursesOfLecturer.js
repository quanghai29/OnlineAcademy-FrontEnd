import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../constants/actionTypes';
import { setLecturerCourses, fetchLecturerCourseFail } from '../actions/coursesOfLecturer';

function* fetchLecturerCourse() {
    try {
        const response = yield call(axios.get, 'http://localhost:5050/courses');
        console.log(response.data);
        yield put(setLecturerCourses(response.data));
    } catch (error) {
        yield put(fetchLecturerCourseFail(error.message));
    }
}

function* watchFetchLecturerCourse() {
    yield takeEvery(type.FETCH_LECTURER_COURSES, fetchLecturerCourse);
}

export default watchFetchLecturerCourse;