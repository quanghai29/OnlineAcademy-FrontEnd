import {
  SET_USERNAME,
  SET_PASSWORD,
  RESET_LOG_IN_FORM,
  SET_ENTIRE_LOG_IN_FORM_STATE
} from "../constants/actionTypes"

const initialState = {
  form: {
    username: '',
    password: '',

    usernameWarningMess: '',
    passwordWarningMess: ''
  }
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      console.log('login reducer', action.payload);
      let newState = { ...state };
      newState.form.username = action.payload.data || '';
      newState.form.usernameWarningMess = action.payload.warningMess || '';

      return newState;
    }
    case SET_PASSWORD: {
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
    case RESET_LOG_IN_FORM: {
      let newState = { ...state };
      newState.form.username = newState.form.password =
        newState.form.usernameWarningMess =
        newState.form.passwordWarningMess = '';

      return newState;
    }
    default: {
      return state;
    }
  }
}

export default loginReducer