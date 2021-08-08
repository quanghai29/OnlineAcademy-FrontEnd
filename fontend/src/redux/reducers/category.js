import * as actionType from '../constants/actionTypes';

const initialState = {
  data: []
};

const category = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_CATEGORY:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default category;