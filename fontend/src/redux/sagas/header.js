import { takeEvery, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';

function* fetchUpdateCourseComment() {
  try {
    const decodePayload = JSON.parse(localStorage.getItem('decodePayload'));
    console.log(decodePayload);
    yield put({
      type: actionType.SET_HEADER,
      payload:{
        ...decodePayload
      }
    });
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchFetchHeader() {
  yield takeEvery(actionType.FETCH_HEADER, fetchUpdateCourseComment);
}

export default function* HeaderSaga() {
  yield all([
    watchFetchHeader()
  ])
}