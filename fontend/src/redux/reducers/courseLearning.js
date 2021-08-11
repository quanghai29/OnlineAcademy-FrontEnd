import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {},
  
};

const courseLearning = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_LEARNING:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default courseLearning;