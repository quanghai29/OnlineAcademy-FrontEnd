import {
  SET_SEARCH_COURSE_RESULT,
  FETCH_SEARCH_COURSE,
  SET_IS_LOADING_SEARCH_COURSE
} from "../constants/actionTypes"

export const setSearchCourseResult=(data)=>{
  return {
    type: SET_SEARCH_COURSE_RESULT,
    data
  }
}

export const setIsLoading = (data)=>{
  return{
    type: SET_IS_LOADING_SEARCH_COURSE,
    data
  }
}

export const fetchSearchingCourse = (data)=>{
  return {
    type: FETCH_SEARCH_COURSE,
    payload : data
  }
}