import { all, takeLatest, put, call } from 'redux-saga/effects';
import { getCourses } from '../../api/course';
import * as type from '../constants/actionTypes';
import {
  setLatestCourses,
  fetchLatestCoursesFail,
  setMostViewCourses,
  fetchMostViewCoursesFail,
} from '../actions/course';

function* fetchMostViewCourses(action) {
  try {
    const data = yield call(getCourses.getMostViewCourses);
    yield put(setMostViewCourses(data));
  } catch (error) {
    yield put(fetchMostViewCoursesFail(error.message));
  }
}

function* watchMostViewCourses() {
  yield takeLatest(type.FETCH_MOST_VIEW_COURSES, fetchMostViewCourses);
}

function* fetchLatestCourses(action) {
  try {
    const data = yield call(getCourses.getLatestCourses);
    yield put(setLatestCourses(data));
  } catch (error) {
    yield put(fetchLatestCoursesFail(error.message));
  }
}

function* watchLatestCourses() {
  yield takeLatest(type.FETCH_LATEST_COURSES, fetchLatestCourses);
}

export default function* getCourseSaga() {
  yield all([watchLatestCourses(), watchMostViewCourses()]);
}
