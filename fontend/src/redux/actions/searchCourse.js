import {
  SET_SEARCH_COURSE_RESULT
} from "../constants/actionTypes"

export const setSearchCourseResult=(data)=>{
  return {
    type: SET_SEARCH_COURSE_RESULT,
    data
  }
}
