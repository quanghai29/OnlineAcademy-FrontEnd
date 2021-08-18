import {
  FETCH_STUDENT_DATA,
  SET_STUDENT_DATA,
  REQUEST_LOCK_STUDENT_ITEM,
  SET_ADMIN_STUDENT_LOADING,
  REQUEST_UNLOCK_STUDENT_ITEM
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

export const requestBlockStudentItem = (data)=>{
  return{
    type: REQUEST_LOCK_STUDENT_ITEM,
    data
  }
}

export const setStudentLoading = (data)=>{
  return{
    type: SET_ADMIN_STUDENT_LOADING,
    data
  }
}

export const requestUnlockStudentItem = (data)=>{
  return{
    type: REQUEST_UNLOCK_STUDENT_ITEM,
    data
  }
}