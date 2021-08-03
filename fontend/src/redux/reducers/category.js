import {
  SET_CATEGORY_DATA,
  SET_CATEGORY_WARNING,
  EDIT_CATEGORY_ITEM,
  CREATE_CATEGORY_ITEM,
  SET_IS_SHOW_FORM_MODAL,
  SET_CATEGORY_INPUT_VALUE, 
  DELETE_CATEGORY_ITEM
} from "../constants/actionTypes"

const initialState = {
  categories: null,
  warningMess: '',
  isShowFormModal: false,
  inputValue: '',
  indexOfDeletedItem: -1
}

const categoryReducer = (state=initialState, action)=>{
  switch(action.type){
    case SET_CATEGORY_DATA:{
      let newState={
        ...state, 
        categories: action.data
      };

      return newState;
    }
    case SET_CATEGORY_WARNING:{
      let newState = {
        ...state,
        warningMess: action.data
      }

      return newState;
    }
    case EDIT_CATEGORY_ITEM:{
      let newState= {...state};
      const {index, category_name,last_update} = action.data;

      newState.categories[index].category_name = category_name;
      newState.categories[index].last_update = last_update;
      newState.isShowFormModal=false;
      newState.inputValue = '';
      newState.warningMess = '';

      return newState;
    }
    case CREATE_CATEGORY_ITEM:{
      let newState = {...state};
      newState.isShowFormModal=false;
      newState.inputValue = '';

      return newState;
    }
    case SET_IS_SHOW_FORM_MODAL:{
      let newState ={
        ...state,
        isShowFormModal: action.data
      }
      return newState;
    }
    case SET_CATEGORY_INPUT_VALUE:{
      let newState = {
        ...state,
        inputValue: action.data
      }
      return newState;
    }
    case DELETE_CATEGORY_ITEM:{
      let newState = {...state};
      newState.indexOfDeletedItem = action.data;
      newState.categories.splice(action.data, 1);
      return newState;
    }
    default:{
      return state;
    }
  }
}

export default categoryReducer;