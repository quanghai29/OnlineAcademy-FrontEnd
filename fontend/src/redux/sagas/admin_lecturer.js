import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as lecturerActions from "../actions/admin_lecturer"
import {
  FETCH_LECTURER_DATA,
  REQUEST_DELETE_LECTURER_ITEM,
  REQUEST_CREATE_LECTURER_ITEM
} from "../constants/actionTypes"
import * as adminApi from "../../api/admin";
import * as commonFunctions from "../../utils/validate"

function* requestFetchLecturerData() {
  const data = yield call(adminApi.getLecturerData);
  yield put(lecturerActions.setLecturerData(data));
}

function* watchFetchLecturerData() {
  yield takeLatest(FETCH_LECTURER_DATA, requestFetchLecturerData);
}

function* requestDeleteLecturerItem(action) {
  const { id, index } = action.data;
  yield put(lecturerActions.deleteLecturerItem(index));
  yield call(adminApi.deleteLecturerItem, id);
}

function* watchDeleteLecturerItem() {
  yield takeLatest(REQUEST_DELETE_LECTURER_ITEM, requestDeleteLecturerItem);
}

function* requestCreateLecturerItem(action) {
  const isUsernameValid = yield call(commonFunctions.validateUsername,
    action.data.username);
  if (!isUsernameValid.isValid) {
    yield put(lecturerActions.setUsernameWarning(isUsernameValid.warning));
  }else{
    yield put(lecturerActions.setUsernameWarning(''));
  }
  const isPasswordValid = yield call(commonFunctions.validatePassword,
    action.data.password);
  if(!isPasswordValid.isValid){
    yield put(lecturerActions.setPasswordWarning(isPasswordValid.warning));
  }else{
    yield put(lecturerActions.setPasswordWarning(''));
  }

  if(isUsernameValid.isValid && isPasswordValid.isValid){
    const res = yield call(adminApi.createLecturerItem,action.data);
    if(res.isUsernameExisted){
      const warning = 'Tên đăng nhập này đã được dùng, vui lòng chọn tên khác';
      yield put(lecturerActions.setUsernameWarning(warning));
    }else{
      yield requestFetchLecturerData();
    }
  }
}

function* watchCreateLecturerItem() {
  yield takeLatest(REQUEST_CREATE_LECTURER_ITEM, requestCreateLecturerItem);
}

export default function* adminLecturerSaga() {
  yield all([
    watchFetchLecturerData(),
    watchDeleteLecturerItem(),
    watchCreateLecturerItem(),
  ])
}