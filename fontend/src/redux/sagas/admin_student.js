import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as studentActions from "../actions/admin_student";
import {
  FETCH_STUDENT_DATA,
  REQUEST_LOCK_STUDENT_ITEM,
  REQUEST_UNLOCK_STUDENT_ITEM
} from "../constants/actionTypes";
import * as adminApi from "../../api/admin"

function* requestFetchStudentData(){
  const data = yield call(adminApi.getStudentData);
  yield put(studentActions.setStudentData(data));
}

function* watchFetchStudentData(){
  yield takeLatest(FETCH_STUDENT_DATA, requestFetchStudentData);
}

function* requestLockStudentItem(action){
  yield call(adminApi.lockStudentItem,action.data.id);
  yield put(studentActions.setStudentLoading(true));
  yield requestFetchStudentData();
}

function* watchLockStudentItem(){
  yield takeLatest(REQUEST_LOCK_STUDENT_ITEM, requestLockStudentItem);
}

function* requestUnlockStudentItem(action){
  yield call(adminApi.unlockStudentItem, action.data);
  yield put(studentActions.setStudentLoading(true));
  yield requestFetchStudentData();
}

function* watchUnlockStudentItem(){
  yield takeLatest(REQUEST_UNLOCK_STUDENT_ITEM,requestUnlockStudentItem);
}

export default function* adminStudentSaga(){
  yield all([
    watchFetchStudentData(),
    watchLockStudentItem(),
    watchUnlockStudentItem(),
  ])
}