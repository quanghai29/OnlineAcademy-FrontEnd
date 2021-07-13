import {
  SET_USERNAME,
  SET_PASSWORD,
  RESET_LOG_IN_FORM,
  SET_ENTIRE_LOG_IN_FORM_STATE
} from "../constants/actionTypes"

export const setUsername = (data) => {
  return {
    type: SET_USERNAME,
    payload: { ...data }
  }
}

export const setPassword = (data)=>{
  return {
    type: SET_PASSWORD,
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