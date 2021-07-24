import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as type from '../constants/actionTypes';
import { setCourse, fetchCourseFails } from '../actions/course';

function* fetchCourse() {
    try {
        const response = yield call(axios.get, 'http://localhost:5050/courses');
        // console.log(response.data);
        yield put(setCourse(response.data));
    } catch (error) {
        yield put(fetchCourseFails(error.message));
    }
}

function* watchFetchCourse() {
    yield takeEvery(type.FETCH_COURSES, fetchCourse);
}

export default watchFetchCourse;