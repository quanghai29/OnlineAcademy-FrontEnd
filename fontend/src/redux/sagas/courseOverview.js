import { takeEvery, call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import * as actionType from '../constants/actionTypes';
import {DOMAIN_API} from '../constants/common';

function* fetchCourseOverview(action) {
  try {
    const response = yield call(axios.get, `${DOMAIN_API}/course/${action.payload.course_id}`);
    if(response.status === 200){
      const data = response.data;
      yield put({
        type: actionType.SET_COURSE_OVERVIEW,
        payload: data
      });
    }
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchFetchCourseOverview() {
  yield takeEvery(actionType.FETCH_COURSE_OVERVIEW, fetchCourseOverview);
}

export default function* CourseOverviewSaga() {
  yield all([
    watchFetchCourseOverview(),
  ])
}