import { actionTypes } from '../actions/categories';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const hotCategories = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOT_CATEGORIES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case actionTypes.FETCH_HOT_CATEGORIES:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_HOT_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default hotCategories;
