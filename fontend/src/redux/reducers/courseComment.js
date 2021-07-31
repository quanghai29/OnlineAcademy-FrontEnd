import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {}
};

const courseComment = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_ONE_COMMENT:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default courseComment;