import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {},
  isLoading: true,
  isError: false,
  error_message: '',
};

const courseLearning = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_LEARNING:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case actionType.ERROR_COURSE_LEARNING:
      return {
        ...state,
        error_message: action.payload.error_message,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default courseLearning;