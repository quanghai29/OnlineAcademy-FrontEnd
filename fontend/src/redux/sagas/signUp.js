import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as signUpActions from '../actions/signUp.js'
import * as validateAccount from '../../utils/account/validate'
import * as accountCallApi from '../axios/account'
import {
  VALIDATE_USERNAME,
  VALIDATE_EMAIL,
  VALIDATE_PASSWORD,
  VALIDATE_CONFIRM_PASSWORD,
  SUBMIT_SIGNUP_FORM
} from '../constants/actionTypes'

function* requestSetUsername(action) {
  const data = yield call(validateAccount.validateUsername,
    action.payload.data);
  yield put(signUpActions.setUsernameAction(data));
}
function* watchSetUsername() {
  yield takeLatest(VALIDATE_USERNAME, requestSetUsername);
}

function* requestSetEmail(action) {
  const data = yield call(validateAccount.validateEmail,
    action.payload.data);
  yield put(signUpActions.setEmailAction(data));
}
function* watchSetEmail() {
  yield takeLatest(VALIDATE_EMAIL, requestSetEmail);
}

function* requestSetPassword(action) {
  const data = yield call(validateAccount.validatePassword,
    action.payload.data)
  yield put(signUpActions.setPasswordAction(data));
}
function* watchSetPassword() {
  yield takeLatest(VALIDATE_PASSWORD, requestSetPassword);
}

function* requestSetConfirmPassword(action) {
  const data = yield call(validateAccount.confirmPassword,
    action.payload.data);

  yield put(signUpActions.setConfirmPasswordAction(data))
}
function* watchSetConfirmPassword() {
  yield takeLatest(VALIDATE_CONFIRM_PASSWORD, requestSetConfirmPassword);
}

function* requestSubmitSignUpForm(action) {
  //validate entire form
  //action.payload = signUpState
  const validateResult = yield call(
    validateAccount.validateEntireSignUpForm, action.payload);

  if (validateResult.isSubmit) {//allow submit
    //call Api
    const res = yield call(accountCallApi.submitSignUpForm,
      validateResult.dataToSubmit);
    yield put(signUpActions.setResponseAction(res));
  } else {
    yield put(signUpActions.setEntireSignUpFormStateAction(
      validateResult.newSignUpFormState));
  }
}

function* watchSubmitForm() {
  yield takeLatest(SUBMIT_SIGNUP_FORM, requestSubmitSignUpForm);
}

export default function* signUpSaga() {
  yield all([
    watchSetUsername(),
    watchSetEmail(),
    watchSetPassword(),
    watchSetConfirmPassword(),
    watchSubmitForm(),
  ])
}