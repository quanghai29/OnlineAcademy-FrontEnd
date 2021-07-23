import {
  SET_SIGN_UP_USERNAME,
  SET_EMAIL,
  SET_SIGN_UP_PASSWORD,
  SET_CONFIRM_PASSWORD, 
  SET_SIGN_UP_RESPONSE, 
  SET_ENTIRE_SIGN_UP_FORM_STATE,
  RESET_SIGN_UP_FORM
} from '../constants/actionTypes'

export const setSignUpUsernameAction = (data)=>{
  return {
    type: SET_SIGN_UP_USERNAME,
    payload: {...data}
  }
}

export const setEmailAction = (data)=>{
  return{
    type: SET_EMAIL,
    payload: {...data}
  }
}

export const setSignUpPasswordAction = (data)=>{
  return{
    type: SET_SIGN_UP_PASSWORD,
    payload: {...data}
  }
}

export const setConfirmPasswordAction = (data)=>{
  return{
    type: SET_CONFIRM_PASSWORD,
    payload: {...data}
  }
}

export const setSignUpResponseAction = (data)=>{
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