import {
  SET_CODE,
  SET_VERIFY_CODE_RESPONSE,
  SET_ENTIRE_VERIFY_CODE_FORM_STATE
} from '../constants/actionTypes'

const initialState = {
  form:{
    code: 0,
    warningMessage: ''
  },
  
  response: {},
}

const verifyCodeReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_CODE:{
      let newState = {...state};
      newState.form.code= action.payload.data || '';
      newState.form.warningMessage= action.payload.warningMessage || '';

      return newState;
    }
    case SET_VERIFY_CODE_RESPONSE: {
      let newState = {
        ...state,
        response: action.payload.data
      };

      return newState;
    }
    case SET_ENTIRE_VERIFY_CODE_FORM_STATE:{
      let newState = {...state};
      newState.form = {...action.payload};

      return newState;
    }
    default:{
      return state;
    }
  }
}

export default verifyCodeReducer;