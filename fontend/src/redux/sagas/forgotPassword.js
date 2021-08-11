import { call, put, takeLatest, all } from 'redux-saga/effects';
import * as forgotPasswordActions from '../actions/forgotPassword'
import {
  validateEmail,
  validateEntireForgotPasswordForm,
} from '../../utils/account/validate'
import {
  VALIDATE_FORGOT_EMAIL,
  SUBMIT_FORGOT_PASSWORD_FORM,
} from "../constants/actionTypes"
import {
  submitEmail
} from "../../api/account"

function* setForgotPasswordEmail(action){
  const result = yield call(validateEmail, action.payload.data);
  yield put(forgotPasswordActions.setForgotEmail(result));
}

function* watchSetForgotPasswordEmail(){
  yield takeLatest(VALIDATE_FORGOT_EMAIL, setForgotPasswordEmail);
}

function* submitForgotPasswordForm(action){
  const result = yield call(validateEntireForgotPasswordForm,action.data);
  if(result.isSubmit){
    //call api submit form
    const res = yield call(submitEmail, result.newForm);
    if(res.isExisted){
      yield put(forgotPasswordActions.setForgotPasswordResponse(res.isExisted));
    }else{
      const warningMess ="Không phải email này, cố gắng nhớ đi bạn ơi!";
      yield put(forgotPasswordActions.setForgotEmail({data:action.data.email,warningMess}))
    }
  }else{
    yield put(forgotPasswordActions.setEntireForgotPasswordForm(result.newForm));
  }
}

function* watchSubmitForgotPasswordForm(){
  yield takeLatest(SUBMIT_FORGOT_PASSWORD_FORM, submitForgotPasswordForm);
}
export default function* forgotPasswordSaga(){
  yield all([
    watchSetForgotPasswordEmail(),
    watchSubmitForgotPasswordForm(),
  ])
}