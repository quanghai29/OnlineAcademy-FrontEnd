import {
  SET_SIGN_UP_USERNAME,
  SET_EMAIL,
  SET_SIGN_UP_PASSWORD,
  SET_CONFIRM_PASSWORD,
  SET_SIGN_UP_RESPONSE,
  SET_ENTIRE_SIGN_UP_FORM_STATE,
  RESET_SIGN_UP_FORM
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
  isExistUsername: true,
  isExistEmail: true,
}

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIGN_UP_USERNAME: {
      let newState = { ...state };
      newState.form.username = action.payload.data || '';
      newState.form.usernameWarningMess
        = action.payload.warningMess || '';

      return newState;
    }
    case SET_EMAIL: {
      let newState = { ...state };
      newState.form.email = action.payload.data || '';
      newState.form.emailWarningMess =
        action.payload.warningMess || '';

      return newState;
    }
    case SET_SIGN_UP_PASSWORD: {
      let newState = { ...state };
      newState.form.password = action.payload.data || '';
      newState.form.passwordWarningMess =
        action.payload.warningMess || '';

      return newState;
    }
    case SET_CONFIRM_PASSWORD: {
      let newState = { ...state };
      newState.form.confirmPassword = action.payload.data || '';
      newState.form.confirmPasswordWarningMess =
        action.payload.warningMess || '';

      return newState
    }

    case SET_ENTIRE_SIGN_UP_FORM_STATE: {
      let newState = { ...state };
      newState.form = { ...action.payload };
      return newState;
    }

    case SET_SIGN_UP_RESPONSE: {
      let newState = { ...state };
      if (action.payload.isExistedUsername) {
        newState.form.usernameWarningMess =
          'Username đã tồn tại. Vui lòng chọn username khác';
      } else if (action.payload.isExistedEmail) {
        newState.form.emailWarningMess =
          'Email đã tồn tại. Vui lòng chọn email khác';
      }else {
        newState.isExistUsername = false;
      }
      newState.response = { ...action.payload };

      return newState;
    }
    case RESET_SIGN_UP_FORM: {
      let newState = { ...state };
      newState.response = {};
      newState.isExistUsername = true;
      newState.isExistEmail = true;
      newState.form.username = newState.form.email =
        newState.form.password = newState.form.confirmPassword =
        newState.form.usernameWarningMess = newState.form.emailWarningMess =
        newState.form.passwordWarningMess =
        newState.form.confirmPasswordWarningMess = '';

      return newState;
    }
    default:
      return state;
  }
}

export default signUpReducer;