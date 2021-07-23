import * as type from '../constants/actionTypes';

const initialState = {
    data: [],
    isLoading: false,
    error: null
  };

  const coursesOfLecturer = (state = initialState, action) => {
    switch (action.type) {
      case type.SET_LECTURER_COURSES:
        return {
          ...state,
          data: action.payload,
          isLoading: false
        };
      case type.FETCH_LECTURER_COURSES:
        return {
          ...state,
          isLoading: true
        };
      case type.FETCH_LECTURER_COURSES_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.message
        };
      case type.SET_LECTURER_COURSE:
        return {
          ...state,
          data: [...state.data, action.payload]
        }
      default:
        return state;
    }
  };
  
  export default coursesOfLecturer;