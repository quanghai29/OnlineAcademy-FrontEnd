import {
  SET_SEARCH_COURSE_RESULT,
  SET_IS_LOADING_SEARCH_COURSE
} from "../constants/actionTypes"

const initialState = {
  courses: null,
  isLoading: false,
}

const searchCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_COURSE_RESULT: {
      let newState = {
        ...state,
        courses: action.data,
        isLoading : false
      }
      return newState;
    }
    case SET_IS_LOADING_SEARCH_COURSE:{
      let newState = {
        ...state,
        isLoading: action.data
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default searchCourseReducer;