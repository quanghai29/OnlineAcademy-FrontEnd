import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as studentActions from "../actions/admin_student";
import {
  FETCH_STUDENT_DATA,
  REQUEST_DELETE_STUDENT_ITEM
} from "../constants/actionTypes";
import * as adminApi from "../../api/admin"

function* requestFetchStudentData(){
  const data = yield call(adminApi.getStudentData);
  yield put(studentActions.setStudentData(data));
}

function* watchFetchStudentData(){
  yield takeLatest(FETCH_STUDENT_DATA, requestFetchStudentData);
}

function* requestDeleteStudentItem(action){
  const index = action.data.index;
  yield put(studentActions.deleteStudentItem(index));
  yield call(adminApi.deleteStudentItem,action.data.id);
}

function* watchDeleteStudentItem(){
  yield takeLatest(REQUEST_DELETE_STUDENT_ITEM, requestDeleteStudentItem);
}

export default function* adminStudentSaga(){
  yield all([
    watchFetchStudentData(),
    watchDeleteStudentItem()
  ])
}