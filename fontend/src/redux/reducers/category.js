import {
  SET_CATEGORY_DATA
} from "../constants/actionTypes"

const initialState = {
  categories: null
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
    default:{
      return state;
    }
  }
}

export default categoryReducer;