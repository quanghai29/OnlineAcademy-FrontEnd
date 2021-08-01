import {
  SET_CATEGORY_DATA,
  SET_CATEGORY_WARNING
} from "../constants/actionTypes"

const initialState = {
  categories: null,
  warningMess: ''
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
    default:{
      return state;
    }
  }
}

export default categoryReducer;