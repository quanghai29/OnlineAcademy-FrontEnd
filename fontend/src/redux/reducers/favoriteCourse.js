import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {}
};

const favoriteCourse = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_FAVORITE_COURSE:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default favoriteCourse;