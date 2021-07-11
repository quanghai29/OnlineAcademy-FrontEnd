import {
  SET_USERNAME,
  SET_EMAIL,
  SET_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_SIGN_UP_RESPONSE,
  SET_ENTIRE_SIGN_UP_FORM_STATE
} from '../constants/actionTypes'

const initialState = {
  form: {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',

    usernameWarningMess: '',
    emailWarningMess: '',
    passwordWarningMess: '',
    confirmPasswordWarningMess: '',
  },

  response: {},
  isExist: true,
}

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERNAME: {
      let newState = { ...state };
      newState.form.username = action.payload.data || '';
      newState.form.usernameWarningMess
        = action.payload.warningMessage || '';

      return newState;
    }
    case SET_EMAIL: {
      let newState = { ...state };
      newState.form.email = action.payload.data || '';
      newState.form.emailWarningMess = action.payload.warningMessage || '';

      return newState;
    }
    case SET_PASSWORD: {
      let newState = { ...state };
      newState.form.password = action.payload.data || '';
      newState.form.passwordWarningMess = action.payload.warningMessage || '';

      return newState;
    }
    case SET_CONFIRM_PASSWORD: {
      let newState = {...state};
      newState.form.confirmPassword= action.payload.data || '';
      newState.form.confirmPasswordWarningMess =  action.payload.warningMessage || '';

      return newState
    }

    case SET_ENTIRE_SIGN_UP_FORM_STATE: {
      let newState = {...state};
      newState.form = {...action.payload};
      return newState;
    }

    case SET_SIGN_UP_RESPONSE: {
      let newState = { ...state };
      if (action.payload.isExist) {
        newState.usernameWarningMess = 'The user name is exist. Please choose another username';
      } else {
        newState.isExist = false;
      }
      newState.response = { ...action.payload };

      return newState;
    }

    default:
      return state;
  }
}

export default signUpReducer;