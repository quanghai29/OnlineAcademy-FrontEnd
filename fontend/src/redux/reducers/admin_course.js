import {
  SET_ADMIN_COURSE,
  SET_ADMIN_COURSE_LOADING
} from "../constants/actionTypes"

const initialState = {
  courses: [],
  indexOfDeletedItem: -1,
  isLoading: false
}

const adminCourseReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_ADMIN_COURSE:{
      let newState = {
        ...state,
        courses: action.data,
        indexOfDeletedItem: -1,
        isLoading: false
      }
      return newState;
    }
    case SET_ADMIN_COURSE_LOADING:{
      let newState={
        ...state,
        isLoading: action.data
      }
      return newState;
    }
    default:{
      return state
    }
  }
}

export default adminCourseReducer;