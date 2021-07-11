import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as verifyCodeActions from '../actions/verifyCode';
import { validateVerifyCode } from '../../utils/account/validate';
import {
  VALIDATE_CODE,
  SUBMIT_VERIFY_CODE_FORM
} from '../constants/actionTypes';
import {submitVerifyCodeForm} from '../axios/account'

function* requestSetCode(action){
  const data = yield call(validateVerifyCode, +action.payload.data);
  yield put(verifyCodeActions.setVerifyCodeAction(data));
}

function* watchSetCode(){
  yield takeLatest(VALIDATE_CODE, requestSetCode);
}

function* requestSubmitVerifyCodeForm(action){
  const result = yield call(submitVerifyCodeForm, action.payload);
  //yield put(verifyCodeActions.setResponseAction(result));
}

function* watchSubmitForm(){
  yield takeLatest(SUBMIT_VERIFY_CODE_FORM, requestSubmitVerifyCodeForm);
}

export default function* verifyCodeSaga(){
  yield all([
    watchSetCode(),
    watchSubmitForm()
  ])
}