import {
  SET_USERNAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD, 
  SET_SIGN_UP_RESPONSE, 
  SET_ENTIRE_SIGN_UP_FORM_STATE,
  RESET_SIGN_UP_FORM
} from '../constants/actionTypes'

export const setUsernameAction = (data)=>{
  return {
    type: SET_USERNAME,
    payload: {...data}
  }
}

export const setEmailAction = (data)=>{
  return{
    type: SET_EMAIL,
    payload: {...data}
  }
}

export const setPasswordAction = (data)=>{
  return{
    type: SET_PASSWORD,
    payload: {...data}
  }
}

export const setConfirmPasswordAction = (data)=>{
  return{
    type: SET_CONFIRM_PASSWORD,
    payload: {...data}
  }
}

export const setResponseAction = (data)=>{
  return {
    type: SET_SIGN_UP_RESPONSE, 
    payload: {...data}
  }
}

export const setEntireSignUpFormStateAction = (data)=>{
  return{
    type: SET_ENTIRE_SIGN_UP_FORM_STATE,
    payload: {...data}
  }
}

export const resetSignUpForm = ()=>{
  return {
    type: RESET_SIGN_UP_FORM
  }
}