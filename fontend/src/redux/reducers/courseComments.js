import * as actionType from '../constants/actionTypes';

const initialState = {
  data: []
};

const courseComments = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_COMMENT:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default courseComments;