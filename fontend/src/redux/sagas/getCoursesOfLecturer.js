import { takeEvery, call, put, all } from 'redux-saga/effects';
import { getCourses, deleteCourses } from '../../api/course';
import * as type from '../constants/actionTypes';
import { setLecturerCourses, fetchLecturerCourseFail, deleteCourseByIdDone, deleteCourseByIdFail } from '../actions/coursesOfLecturer';

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

function* deleteCourseById(action) {
    try {
        const data = yield call(deleteCourses.deleteCourseById, action.payload);
        yield put(deleteCourseByIdDone(data));
    } catch (error) {
        yield put(deleteCourseByIdFail(error.message));
    }
}

function* watchDeleteCourseById() {
    yield takeEvery(type.DELETE_COURSE, deleteCourseById);
}

export default function* lecturerCoursesSaga() {
    yield all([watchFetchLecturerCourse(), watchDeleteCourseById()]);
  }