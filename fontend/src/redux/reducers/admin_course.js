import {
  SET_ADMIN_COURSE,
  DELETE_ADMIN_COURSE_ITEM,
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
    case DELETE_ADMIN_COURSE_ITEM:{
      let newState = {...state};
      newState.courses.splice(action.data, 1);
      newState.indexOfDeletedItem = action.data;
      
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