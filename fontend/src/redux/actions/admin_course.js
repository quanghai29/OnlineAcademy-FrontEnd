import {
  FETCH_ADMIN_COURSE,
  SET_ADMIN_COURSE,
  SET_ADMIN_COURSE_LOADING,
  REQUEST_LOCK_ADMIN_COURSE_ITEM,
  REQUEST_UNLOCK_ADMIN_COURSE_ITEM
} from "../constants/actionTypes"

export const fetchAdminCourse = ()=>{
  return{
    type: FETCH_ADMIN_COURSE
  }
}

export const setAdminCourse = (data)=>{
  return{
    type: SET_ADMIN_COURSE,
    data
  }
}

export const setCourseLoading = (data)=>{
  return{
    type: SET_ADMIN_COURSE_LOADING,
    data
  }
}

export const requestLockCourseItem = (data)=>{
  return{
    type: REQUEST_LOCK_ADMIN_COURSE_ITEM,
    data
  }
}

export const requestUnlockCourseItem = (data)=>{
  return{
    type: REQUEST_UNLOCK_ADMIN_COURSE_ITEM,
    data
  }
}