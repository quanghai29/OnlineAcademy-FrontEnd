import {
  FETCH_STUDENT_DATA,
  SET_STUDENT_DATA,
  REQUEST_DELETE_STUDENT_ITEM,
  DELETE_STUDENT_ITEM,
  SET_ADMIN_STUDENT_LOADING
} from "../constants/actionTypes"

export const fetchStudentData = ()=>{
  return{
    type: FETCH_STUDENT_DATA
  }
}

export const setStudentData = (data)=>{
  return{
    type: SET_STUDENT_DATA,
    data
  }
}

export const requestDeleteStudentItem = (data)=>{
  return{
    type: REQUEST_DELETE_STUDENT_ITEM,
    data
  }
}

export const deleteStudentItem = (data)=>{
  return{
    type: DELETE_STUDENT_ITEM,
    data
  }
}

export const setStudentLoading = (data)=>{
  return{
    type: SET_ADMIN_STUDENT_LOADING,
    data
  }
}