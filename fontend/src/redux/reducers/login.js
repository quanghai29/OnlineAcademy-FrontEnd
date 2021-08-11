import {
  SET_LOG_IN_USERNAME,
  SET_LOG_IN_PASSWORD,
  RESET_LOG_IN_FORM,
  SET_ENTIRE_LOG_IN_FORM_STATE,
  SET_LOG_IN_RESPONSE, 
  RESET_RESPONSE_DATA,
} from "../constants/actionTypes"

const initialState = {
  form: {
    username: '',
    password: '',

    usernameWarningMess: '',
    passwordWarningMess: ''
  },

  responseData:{
    isAuth: false,
    username: '',
    email: '',
    shouldConfirmEmail: false
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOG_IN_USERNAME: {
      let newState = { ...state };
      newState.form.username = action.payload.data || '';
      newState.form.usernameWarningMess = action.payload.warningMess || '';

      return newState;
    }
    case SET_LOG_IN_PASSWORD: {
      let newState = { ...state };
      newState.form.password = action.payload.data || '';
      newState.form.passwordWarningMess = action.payload.warningMess || '';

      return newState;
    }
    case SET_ENTIRE_LOG_IN_FORM_STATE: {
      let newState = { ...state };
      newState.form = { ...action.payload };

      return newState;
    }
    case SET_LOG_IN_RESPONSE: {
      let newState = {...state};
      newState.responseData={...action.payload};

      return newState;
    }
    case RESET_LOG_IN_FORM: {
      let newState = { ...state };
      newState.form.username = newState.form.password =
        newState.form.usernameWarningMess =
        newState.form.passwordWarningMess = '';

      return newState;
    }
    case RESET_RESPONSE_DATA:{
      let newState = {...state};
      newState.responseData.isAuth= 
      newState.responseData.shouldConfirmEmail=false;
      newState.responseData.email=newState.responseData.username = '';

      return newState;
    }
    default: {
      return state;
    }
  }
}

export default loginReducer