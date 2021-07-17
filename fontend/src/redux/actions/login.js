import {
  SET_LOG_IN_USERNAME,
  SET_LOG_IN_PASSWORD,
  RESET_LOG_IN_FORM,
  SET_ENTIRE_LOG_IN_FORM_STATE,
  SET_LOG_IN_RESPONSE,
  RESET_RESPONSE_DATA
} from "../constants/actionTypes"

export const setLoginUsername = (data) => {
  return {
    type: SET_LOG_IN_USERNAME,
    payload: { ...data }
  }
}

export const setLoginPassword = (data)=>{
  return {
    type: SET_LOG_IN_PASSWORD,
    payload: {...data}
  }
}

export const resetLoginForm = ()=>{
  return{
    type: RESET_LOG_IN_FORM
  }
}

export const setEntireLoginForm = (data)=>{
  return{
    type: SET_ENTIRE_LOG_IN_FORM_STATE,
    payload: {...data}
  }
}

export const setLoginResponse = (data)=>{
  return{
    type: SET_LOG_IN_RESPONSE,
    payload: {...data}
  }
}

export const resetResponseData =()=>{
  return {
    type: RESET_RESPONSE_DATA
  }
}