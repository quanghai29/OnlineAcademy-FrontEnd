import { takeEvery, put, all } from 'redux-saga/effects';
import * as actionType from '../constants/actionTypes';
import {
  resetResponseData
} from "../actions/login"

function* fetchLogOut() {
  try {
    localStorage.removeItem("decodePayload");
    localStorage.removeItem("GelApp_userId");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    yield put({
      type: actionType.SET_HEADER,
      payload:{
        isAuth: false,
      }
    });

    yield put(resetResponseData());
  } catch (error) {
    //yield put(fetchCourseFail(error.message));
  }
}

function* watchFetchLogout() {
  yield takeEvery(actionType.FETCH_LOGOUT, fetchLogOut);
}

export default function* LogoutSaga() {
  yield all([
    watchFetchLogout()
  ])
}