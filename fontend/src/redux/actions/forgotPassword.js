import {
  SET_FORGOT_EMAIL,
  SET_ENTIRE_FORGOT_PASSWORD_FORM,
  SUBMIT_FORGOT_PASSWORD_FORM,
  RESET_FORGOT_PASSWORD_STATE,
  SET_FORGOT_PASSWORD_RESPONSE
} from "../constants/actionTypes"

export const setForgotEmail = (data)=>{
  return{
    type: SET_FORGOT_EMAIL,
    data
  }
}

export const setEntireForgotPasswordForm = (data)=>{
  return{
    type: SET_ENTIRE_FORGOT_PASSWORD_FORM,
    data
  }
}

export const submitForgotPasswordForm = (data)=>{
  return{
    type: SUBMIT_FORGOT_PASSWORD_FORM,
    data
  }
}

export const resetForgotPasswordState = ()=>{
  return{
    type: RESET_FORGOT_PASSWORD_STATE
  }
}

export const setForgotPasswordResponse = (data)=>{
  return{
    type: SET_FORGOT_PASSWORD_RESPONSE,
    data
  }
}