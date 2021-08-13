import {
  FETCH_ADMIN_COURSE,
  SET_ADMIN_COURSE,
  DELETE_ADMIN_COURSE_ITEM, 
  REQUEST_DELETE_ADMIN_COURSE_ITEM
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

export const requestDeleteAdminCourseItem = (data)=>{
  return {
    type: REQUEST_DELETE_ADMIN_COURSE_ITEM,
    data
  }
}

export const deleteAdminCourseItem = (data)=>{
  return{
    type: DELETE_ADMIN_COURSE_ITEM,
    data
  }
}