import * as actionType from '../constants/actionTypes';

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

const courseCategory = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_OF_CATEGORY:
      return {
        ...state,
        data : action.payload,
        isLoading: false,
        isError: false,
      };
    case actionType.ERROR_COURSE_OF_CATEGORY:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default courseCategory;