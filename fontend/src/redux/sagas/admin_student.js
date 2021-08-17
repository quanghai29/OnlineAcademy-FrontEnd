import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as studentActions from "../actions/admin_student";
import {
  FETCH_STUDENT_DATA,
  REQUEST_BLOCK_STUDENT_ITEM
} from "../constants/actionTypes";
import * as adminApi from "../../api/admin"

function* requestFetchStudentData(){
  const data = yield call(adminApi.getStudentData);
  yield put(studentActions.setStudentData(data));
}

function* watchFetchStudentData(){
  yield takeLatest(FETCH_STUDENT_DATA, requestFetchStudentData);
}

function* requestBlockStudentItem(action){
  yield call(adminApi.blockStudentItem,action.data.id);
  yield put(studentActions.setStudentLoading(true));
  yield requestFetchStudentData();
}

function* watchBlockStudentItem(){
  yield takeLatest(REQUEST_BLOCK_STUDENT_ITEM, requestBlockStudentItem);
}

export default function* adminStudentSaga(){
  yield all([
    watchFetchStudentData(),
    watchBlockStudentItem()
  ])
}