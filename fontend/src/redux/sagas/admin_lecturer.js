import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as lecturerActions from "../actions/admin_lecturer"
import {
  FETCH_LECTURER_DATA,
} from "../constants/actionTypes"
import * as adminApi from "../../api/admin"

function* requestFetchLecturerData(){
  const data = yield call(adminApi.getLecturerData);
  yield put(lecturerActions.setLecturerData(data));
}

function* watchFetchLecturerData(){
  yield takeLatest(FETCH_LECTURER_DATA, requestFetchLecturerData);
}

export default function* adminLecturerSaga(){
  yield all([
    watchFetchLecturerData(),

  ])
}