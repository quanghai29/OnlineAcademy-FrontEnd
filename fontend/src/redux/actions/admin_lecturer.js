import {
  FETCH_LECTURER_DATA,
  SET_LECTURER_DATA,
  REQUEST_DELETE_LECTURER_ITEM,
  DELETE_LECTURER_ITEM,
  REQUEST_CREATE_LECTURER_ITEM,
  SET_IS_SHOW_LECTURE_FORM_MODAL,
  SET_LECTURER_USERNAME,
  SET_LECTURER_PASSWORD,
  SET_LECTURER_USERNAME_WARNING,
  SET_LECTURER_PASSWORD_WARNING,
  SET_ADMIN_LECTURER_LOADING
} from "../constants/actionTypes"

export const fetchLecturerData = ()=>{
  return{
    type: FETCH_LECTURER_DATA
  }
}

export const setLecturerData = (data)=>{
  return {
    type: SET_LECTURER_DATA,
    data
  }
}

export const requestDeleteLecturerItem = (data)=>{
  return{
    type: REQUEST_DELETE_LECTURER_ITEM,
    data
  }
}

export const deleteLecturerItem = (data)=>{
  return{
    type: DELETE_LECTURER_ITEM,
    data
  }
}

export const requestCreateLecturerItem = (data)=>{
  return{
    type: REQUEST_CREATE_LECTURER_ITEM,
    data
  }
}

export const setIsShowLecturerFormModal = (data)=>{
  return{
    type: SET_IS_SHOW_LECTURE_FORM_MODAL,
    data
  }
}

export const setLecturerUsername = (data)=>{
  return{
    type: SET_LECTURER_USERNAME,
    data
  }
}

export const setLecturerPassword = (data)=>{
  return{
    type: SET_LECTURER_PASSWORD,
    data
  }
}

export const setUsernameWarning = (data)=>{
  return{
    type: SET_LECTURER_USERNAME_WARNING,
    data
  }
}

export const setPasswordWarning = (data)=>{
  return{
    type: SET_LECTURER_PASSWORD_WARNING,
    data
  }
}

export const setLecturerLoading = (data)=>{
  return{
    type: SET_ADMIN_LECTURER_LOADING,
    data
  }
}