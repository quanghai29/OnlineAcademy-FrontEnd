import * as actionType from '../constants/actionTypes';

const initialState = {
  data: [],
  isLoading: true,
  hasError: false,
};

const relatedCourse = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_RELATED_COURSE:
      return {
        ...state,
        data : action.payload,
        isLoading: false,
        hasError: false,
      };
    case actionType.ERROR_RELATED_COURSE:
      return{
        ...state,
        isLoading: false,
        hasError: true
      }
    default:
      return state;
  }
};

export default relatedCourse;