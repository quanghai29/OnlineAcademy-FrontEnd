import {
  SET_SEARCH_TEXT,
  SET_SEARCH_COURSE_RESULT,
  RESET_SEARCH_FORM,
  RESET_SEARCH_COURSE_STATE,
} from "../constants/actionTypes"

const initialState = {
  result: null,
  text: '',
  isSearched: false
}

const searchCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TEXT: {
      let newState = {
        ...state,
        text: action.text
      }
      return newState;
    }
    case SET_SEARCH_COURSE_RESULT: {
      let newState = {
        ...state,
        result: action.data,
        isSearched: true
      }
      return newState;
    }
    case RESET_SEARCH_FORM: {
      let newState = {
        ...state,
        text: ''
      }
      return newState;
    }
    case RESET_SEARCH_COURSE_STATE: {
      let newState = {
        ...state,
        result: [],
        text: '',
        isSearched: false
      }

      return newState;
    }
    default: {
      return state;
    }
  }
}

export default searchCourseReducer;