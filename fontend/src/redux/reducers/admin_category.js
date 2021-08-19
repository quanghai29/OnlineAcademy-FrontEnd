import {
  SET_ADMIN_CATEGORY,
  SET_ADMIN_CATEGORY_WARNING,
  SET_IS_SHOW_FORM_MODAL,
  SET_CATEGORY_INPUT_VALUE,
  DELETE_CATEGORY_ITEM,
  SET_ADMIN_CATEGORY_LOADING
} from "../constants/actionTypes"

const initialState = {
  categories: null,
  warningMess: '',
  isShowFormModal: false,
  inputValue: '',
  indexOfDeletedItem: -1,
  isLoading: false
}

const adminCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ADMIN_CATEGORY: {
      let newState = {
        ...state,
        categories: action.data,
        warningMess: '',
        isShowFormModal: false,
        inputValue: '',
        indexOfDeletedItem: -1,
        isLoading: false
      };

      return newState;
    }
    case SET_ADMIN_CATEGORY_WARNING: {
      let newState = {
        ...state,
        warningMess: action.data
      }

      return newState;
    }
    case SET_IS_SHOW_FORM_MODAL: {
      let newState = {
        ...state,
        isShowFormModal: action.data
      }
      return newState;
    }
    case SET_CATEGORY_INPUT_VALUE: {
      let newState = {
        ...state,
        inputValue: action.data
      }
      return newState;
    }
    case DELETE_CATEGORY_ITEM: {
      let newState = { ...state };
      newState.indexOfDeletedItem = action.data;
      newState.categories.splice(action.data, 1);
      return newState;
    }
    case SET_ADMIN_CATEGORY_LOADING:{
      let newState = {
        ...state,
        isLoading: action.data
      }
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default adminCategoryReducer;