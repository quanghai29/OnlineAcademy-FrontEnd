import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {},
  isLoading: true,
  isError: false,
};

const courseOverview = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_OVERVIEW:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case actionType.ERROR_COURSE_OVERVIEW:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case actionType.RESET_COURSE_OVERVIEW:
        return {
          isLoading: true,
          isError: false,
          data: {}
        };
    default:
      return state;
  }
};

export default courseOverview;