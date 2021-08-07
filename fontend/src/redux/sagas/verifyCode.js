import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as verifyCodeActions from '../actions/verifyCode';
import {
  validateVerifyCode,
  validateEntireVerifyCodeForm
} from '../../utils/account/validate';
import {
  VALIDATE_CODE,
  SUBMIT_VERIFY_CODE_FORM,
  REQUEST_RESET_VERIFY_CODE_FORM
} from '../constants/actionTypes';
import { submitVerifyCodeForm } from '../../api/account'


function* requestSetCode(action) {
  const data = yield call(validateVerifyCode, +action.payload.data);
  yield put(verifyCodeActions.setVerifyCodeAction(data));
}

function* watchSetCode() {
  yield takeLatest(VALIDATE_CODE, requestSetCode);
}

function* requestSubmitVerifyCodeForm(action) {
  //validate entire form
  //action.payload = verify code form state
  const validateResult = yield call(validateEntireVerifyCodeForm,
    action.payload);
   
  if (validateResult.isSubmit) {
    const result = yield call(submitVerifyCodeForm,
      validateResult.newFormState);
    yield put(verifyCodeActions.setResponseAction(result));
  } else {
    yield put(verifyCodeActions.setEntireVerifyCodeFormStateAction(
      validateResult.newFormState));
  }
}

function* watchSubmitForm() {
  yield takeLatest(SUBMIT_VERIFY_CODE_FORM, requestSubmitVerifyCodeForm);
}

function* requestResetVerifyCodeForm(){
  yield put(verifyCodeActions.resetVerifyCodeFormAction());
}
function* watchResetVerifyCodeForm(){
  yield takeLatest(REQUEST_RESET_VERIFY_CODE_FORM,requestResetVerifyCodeForm);
}

export default function* verifyCodeSaga() {
  yield all([
    watchSetCode(),
    watchSubmitForm(),
    watchResetVerifyCodeForm()
  ])
}