import { takeEvery, call, put, all } from 'redux-saga/effects';
import { getCourses } from '../../api/course';
import * as type from '../constants/actionTypes';
import { setLecturerCourses, fetchLecturerCourseFail } from '../actions/coursesOfLecturer';

function* fetchLecturerCourse(action) {
    try {
        const data = yield call(getCourses.getCoursesByLecturerId, action.payload.lecturer_id);
        yield put(setLecturerCourses(data));
    } catch (error) {
        yield put(fetchLecturerCourseFail(error.message));
    }
}

function* watchFetchLecturerCourse() {
    yield takeEvery(type.FETCH_LECTURER_COURSES, fetchLecturerCourse);
}

export default function* lecturerCoursesSaga() {
    yield all([watchFetchLecturerCourse()]);
  }