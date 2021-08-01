import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {}
};

const registerCourse = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_REGISTER_COURSE:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default registerCourse;