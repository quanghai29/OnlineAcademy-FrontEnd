import {
  SET_SEARCH_TEXT,
  SET_SEARCH_COURSE_RESULT,
  RESET_SEARCH_FORM
} from "../constants/actionTypes"

export const setSearchText=(text)=>{
  return {
    type: SET_SEARCH_TEXT,
    text
  }
}

export const setSearchCourseResult=(data)=>{
  return {
    type: SET_SEARCH_COURSE_RESULT,
    data
  }
}

export const resetSearchForm = ()=>{
  return{
    type: RESET_SEARCH_FORM
  }
}