import * as type from '../constants/actionTypes';

const initialState = {
    data: [],
    isLoading: false,
    error: null
  };

  const hotCourses = (state = initialState, action) => {
    switch (action.type) {
      case type.SET_HOT_COURSES:
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case type.FETCH_HOT_COURSES:
        return {
          ...state,
          isLoading: true
        };
      case type.FETCH_HOT_COURSES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.message
        };
      default:
        return state;
    }
  };
  
  export default hotCourses;