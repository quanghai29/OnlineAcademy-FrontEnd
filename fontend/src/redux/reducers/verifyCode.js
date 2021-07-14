import {
  SET_CODE,
  SET_VERIFY_CODE_RESPONSE,
  SET_ENTIRE_VERIFY_CODE_FORM_STATE,
  RESET_VERIFY_CODE_FORM,
} from '../constants/actionTypes'

const initialState = {
  form:{
    code: 0,
    warningMess: ''
  },
  
  response: {},
}

const verifyCodeReducer = (state = initialState, action)=>{
  switch(action.type){
    case SET_CODE:{
      let newState = {...state};
      newState.form.code= action.payload.data || '';
      newState.form.warningMess= action.payload.warningMess || '';

      return newState;
    }
    case SET_VERIFY_CODE_RESPONSE: {
      let newState = {
        ...state,
        response: action.payload
      };

      return newState;
    }
    case SET_ENTIRE_VERIFY_CODE_FORM_STATE:{
      let newState = {...state};
      newState.form = {...action.payload};

      return newState;
    }
    case RESET_VERIFY_CODE_FORM:{
      let newState = {...state};
      newState.form.code = 0;
      newState.form.warningMess = '';
      newState.response = {};

      return newState;
    }
    default:{
      return state;
    }
  }
}

export default verifyCodeReducer;