import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {}
};

const courseOverview = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_COURSE_OVERVIEW:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default courseOverview;