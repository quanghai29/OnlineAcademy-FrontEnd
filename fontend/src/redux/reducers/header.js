import * as actionType from '../constants/actionTypes';

const initialState = {
  data: {}
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_HEADER:
      return {
        ...state,
        data : action.payload,
      };
    default:
      return state;
  }
};

export default header;