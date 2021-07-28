import * as type from '../constants/actionTypes';

const initialState = {
    data: [],
    isLoading: false,
    error: null
  };

  const mostViewCourses = (state = initialState, action) => {
    switch (action.type) {
      case type.SET_MOST_VIEW_COURSES:
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case type.FETCH_MOST_VIEW_COURSES:
        return {
          ...state,
          isLoading: true
        };
      case type.FETCH_MOST_VIEW_COURSES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.message
        };
      default:
        return state;
    }
  };
  
  export default mostViewCourses;