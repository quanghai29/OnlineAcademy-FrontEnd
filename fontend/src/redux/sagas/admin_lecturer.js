import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as lecturerActions from "../actions/admin_lecturer"
import {
  FETCH_LECTURER_DATA,
  REQUEST_LOCK_LECTURER_ITEM,
  REQUEST_CREATE_LECTURER_ITEM,
  REQUEST_UNLOCK_LECTURER_ITEM
} from "../constants/actionTypes"
import * as adminApi from "../../api/admin";
import * as commonFunctions from "../../utils/functions"

function* requestFetchLecturerData() {
  const data = yield call(adminApi.getLecturerData);
  yield put(lecturerActions.setLecturerData(data));
}

function* watchFetchLecturerData() {
  yield takeLatest(FETCH_LECTURER_DATA, requestFetchLecturerData);
}

function* requestLockLecturerItem(action) {
  const { id } = action.data;
  yield call(adminApi.lockLecturerItem, id);
  yield put(lecturerActions.setLecturerLoading(true));
  yield requestFetchLecturerData();
}

function* watchLockLecturerItem() {
  yield takeLatest(REQUEST_LOCK_LECTURER_ITEM, requestLockLecturerItem);
}

function* requestUnlockLecturerItem(action) {
  yield call(adminApi.unlockLecturerItem, action.data);
  yield put(lecturerActions.setLecturerLoading(true));
  yield requestFetchLecturerData();
}

function* watchUnlockLecturerItem() {
  yield takeLatest(REQUEST_UNLOCK_LECTURER_ITEM, requestUnlockLecturerItem);
}

function* requestCreateLecturerItem(action) {
  const usernameWarning = yield call(commonFunctions.validateUsername,
    action.data.username);
  if (usernameWarning) {
    yield put(lecturerActions.setUsernameWarning(usernameWarning));
  } else {
    yield put(lecturerActions.setUsernameWarning(''));
  }
  const isPasswordValid = yield call(commonFunctions.validatePassword,
    action.data.password);
  if (!isPasswordValid.isValid) {
    yield put(lecturerActions.setPasswordWarning(isPasswordValid.warning));
  } else {
    yield put(lecturerActions.setPasswordWarning(''));
  }

  if (!usernameWarning && isPasswordValid.isValid) {
    const res = yield call(adminApi.createLecturerItem, action.data);
    if (res.isUsernameExisted) {
      const warning = 'Tên đăng nhập này đã được dùng, vui lòng chọn tên khác';
      yield put(lecturerActions.setUsernameWarning(warning));
    } else {
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
    watchLockLecturerItem(),
    watchCreateLecturerItem(),
    watchUnlockLecturerItem(),
  ])
}