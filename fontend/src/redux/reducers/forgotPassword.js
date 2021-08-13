import {
  SET_FORGOT_EMAIL,
  SET_ENTIRE_FORGOT_PASSWORD_FORM,
  RESET_FORGOT_PASSWORD_STATE,
  SET_FORGOT_PASSWORD_RESPONSE
} from "../constants/actionTypes"

const initialState = {
  form: {
    email: '',
    warning: ''
  },
  isExistedAcc: false
}

const forgotPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORGOT_EMAIL: {
      let newState = { ...state };
      newState.form.email = action.data.data;
      newState.form.warning = action.data.warningMess
      return newState;
    }
    case SET_ENTIRE_FORGOT_PASSWORD_FORM: {
      let newState = { ...state };
      newState.form = { ...action.data };
      return newState;
    }
    case SET_FORGOT_PASSWORD_RESPONSE:{
      let newState = {...state};
      newState.isExistedAcc = action.data;
      return newState;
    }
    case RESET_FORGOT_PASSWORD_STATE: {
      let newState = {
        ...state,
        isExistedAcc: false
      };
      newState.form.email= newState.form.warning = '';
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default forgotPasswordReducer;