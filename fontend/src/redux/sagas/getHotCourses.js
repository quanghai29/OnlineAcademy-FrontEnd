import { takeEvery, call, put } from 'redux-saga/effects';
import { getCourses } from '../../api/course';
import * as type from '../constants/actionTypes';
import { setHotCourse, fetchHotCourseFail } from '../actions/hotCourses';

function* fetchHotCourse() {
    try {
        const data = yield call(getCourses.getHotCourses);
        yield put(setHotCourse(data));
    } catch (error) {
        yield put(fetchHotCourseFail(error.message));
    }
}

function* watchFetchHotCourse() {
    yield takeEvery(type.FETCH_HOT_COURSES, fetchHotCourse);
}

export default watchFetchHotCourse;