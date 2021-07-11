
export const validateUsername = (username) => {
  let result = {};
  result = username ? { warningMessage: '', data: username }
    : { warningMessage: 'Please enter a valid full name!' }
  return result;
}

export const validateEmail = (email) => {
  if (email === "") {
    return {
      warningMessage: 'Please enter a valid email!',
      data: ''
    }
  } else {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(String(email).toLowerCase());
    return isValidEmail ? { warningMessage: '', data: email }
      : { warningMessage: 'Email is invalid!', data: email }
  }
}

export const confirmPassword = (data) => {
  let result = {};
  if (data.confirmPassword === '') {
    result.warningMessage = 'Please enter the password again!';
  } else {
    if (data.password !== data.confirmPassword) {
      result.warningMessage = 'The password is not corresponding';
    } else {
      result.warningMessage = '';
    }
  }

  result.data = data.confirmPassword;
  return result;
}

export const validatePassword = (password) => {
  let result = {};
  result = password ? { warningMessage: '', data: password }
    : { warningMessage: 'Please enter a password!' }
  return result;
}

export const validateEntireSignUpForm = (signUpFormState) => {
  let isSubmit = true;
  let newSignUpFormState = { ...signUpFormState };
  if (newSignUpFormState.username === '' &&
    newSignUpFormState.usernameWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.usernameWarningMess = 'Please enter a your username';
  }
  if (newSignUpFormState.email === '' &&
    newSignUpFormState.emailWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.emailWarningMess = 'Please enter your email';
  }
  if (newSignUpFormState.password === '' &&
    newSignUpFormState.passwordWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.passwordWarningMess = 'Please enter your password';
  }
  if (newSignUpFormState.confirmPassword === '' &&
    newSignUpFormState.confirmPasswordWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.confirmPasswordWarningMess = 'Please enter your password again';
  }

  if (isSubmit) {
    if ((newSignUpFormState.username !== '' &&
      newSignUpFormState.email !== '' &&
      newSignUpFormState.password !== '' &&
      newSignUpFormState.confirmPassword !== '') &&
      (newSignUpFormState.usernameWarningMess === '' &&
        newSignUpFormState.emailWarningMess === '' &&
        newSignUpFormState.passwordWarningMess === '' &&
        newSignUpFormState.confirmPasswordWarningMess === ''
      )) {
      return {
        isSubmit,
        dataToSubmit: {
          username: newSignUpFormState.username,
          email: newSignUpFormState.email,
          password: newSignUpFormState.password,
          account_role: 3
        }
      }
    } else {
      isSubmit = false;
      return {
        isSubmit,
        newSignUpFormState
      }
    }
  } else {
    return {
      isSubmit,
      newSignUpFormState
    }
  }

}

export const validateVerifyCode = (code) => {
  let result = {};
  result = code ? { warningMessage: '', data: code }
    : { warningMessage: 'Please enter the code!' }

  return result;
}