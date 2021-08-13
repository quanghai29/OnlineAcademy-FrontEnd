import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as loginActions from '../actions/login'
import {
  validateUsername,
  validatePassword,
  validateEntireLoginForm
} from '../../utils/account/validate'
import {
  VALIDATE_LOG_IN_USERNAME,
  VALIDATE_LOG_IN_PASSWORD,
  SUBMIT_LOG_IN_FORM,
  REQUEST_ACTIVE_ACCOUNT,
} from "../constants/actionTypes"
import {
  submitLoginForm,
  activeAccount
} from "../../api/account"

function* requestSetUsername(action) {
  const validateResult = yield call(validateUsername,
    action.payload.data);
  yield put(loginActions.setLoginUsername(validateResult));
}

function* watchSetUsername() {
  yield takeLatest(VALIDATE_LOG_IN_USERNAME, requestSetUsername);
}

function* requestSetPassword(action) {
  const validateResult = yield call(validatePassword,
    action.payload.data);
  yield put(loginActions.setLoginPassword(validateResult));
}
function* watchSetPassword() {
  yield takeLatest(VALIDATE_LOG_IN_PASSWORD, requestSetPassword);
}

function* requestSetEntireLoginForm(action) {
  //validate entire form before submit
  const validateResult = yield call(validateEntireLoginForm,
    action.payload);
  if (validateResult.isSubmit) {
    //call Api submit form
    const resData = yield call(submitLoginForm, validateResult.newFormState);
    yield put(loginActions.setLoginResponse(resData));
    yield put(loginActions.resetLoginForm());
  } else {
    yield put(loginActions.setEntireLoginForm(validateResult.newFormState));
  }
}
function* watchSetEntireLoginForm() {
  yield takeLatest(SUBMIT_LOG_IN_FORM, requestSetEntireLoginForm);
}

function* requestActiveAccount(action) {
  yield call(activeAccount, action.payload.email);
  yield put(loginActions.resetResponseData());
  yield put(loginActions.resetLoginForm());
}
function* watchRequestActiveAccount() {
  yield takeLatest(REQUEST_ACTIVE_ACCOUNT, requestActiveAccount);
}

export default function* loginSaga() {
  yield all([
    watchSetUsername(),
    watchSetPassword(),
    watchSetEntireLoginForm(),
    watchRequestActiveAccount(),
  ])
}