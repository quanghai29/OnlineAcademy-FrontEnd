import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../constants/actionTypes';
import { setHotCourse, fetchHotCourseFail } from '../actions/hotCourses';

function* fetchHotCourse() {
    try {
        const response = yield call(axios.get, 'http://localhost:5050/hotCourses');
        console.log(response.data);
        yield put(setHotCourse(response.data));
    } catch (error) {
        yield put(fetchHotCourseFail(error.message));
    }
}

function* watchFetchHotCourse() {
    yield takeEvery(type.FETCH_COURSES, fetchHotCourse);
}

export default watchFetchHotCourse;