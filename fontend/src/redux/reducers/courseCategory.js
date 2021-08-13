import * as actionType from '../constants/actionTypes';

const initialState = {
  data: []
};

const courseCategory = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_OF_CATEGORY:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default courseCategory;