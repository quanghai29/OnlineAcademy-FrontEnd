import {
  SET_SEARCH_COURSE_RESULT
} from "../constants/actionTypes"

const initialState = {
  courses: null,
}

const searchCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_COURSE_RESULT: {
      let newState = {
        ...state,
        courses: action.data,
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default searchCourseReducer;