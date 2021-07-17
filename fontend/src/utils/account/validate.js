
export const validateUsername = (username) => {
  let result = {};
  result = username ? { warningMess: '', data: username }
    : { warningMess: 'Please enter a valid full name!' }
  return result;
}

export const validateEmail = (email) => {
  if (email === "") {
    return {
      warningMess: 'Please enter a valid email!',
      data: ''
    }
  } else {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(String(email).toLowerCase());

    return isValidEmail ? { warningMess: '', data: email }
      : { warningMess: 'Email is invalid!', data: email }
  }
}

export const confirmPassword = (data) => {
  let result = {};
  if (data.confirmPassword === '') {
    result.warningMess = 'Please enter the password again!';
  } else {
    if (data.password !== data.confirmPassword) {
      result.warningMess = 'The password is not corresponding';
    } else {
      result.warningMess = '';
    }
  }

  result.data = data.confirmPassword;
  return result;
}

export const validatePassword = (password) => {
  let result = {};
  if (!password) {
    result = { warningMess: 'Please enter a password!' };
  } else {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let isValidPassword = regex.test(password);

    result = isValidPassword ? { warningMess: '', data: password }
      : {
        warningMess: `Minimum 8 characters,
       at least 1 uppercase letter, 
       1 lowercase letter and 1 number`,
        data: password
      };
  }

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
  result = code ? { warningMess: '', data: code }
    : { warningMess: 'Please enter the code!' }

  return result;
}

export const validateEntireVerifyCodeForm = (verifyCodeFormState) => {

  let isSubmit = true;
  let newFormState = { ...verifyCodeFormState };

  if (newFormState.code === 0 &&
    newFormState.warningMess === '') {
    isSubmit = false;
    newFormState.warningMess = 'Please enter a verify code';
  }

  if (isSubmit) {
    if (newFormState.code !== 0 &&
      newFormState.warningMess === '') {
      return {
        isSubmit,
        dataToSubmit: {
          code: newFormState.code
        }
      }
    } else {
      isSubmit = false;
      return {
        isSubmit,
        newFormState
      }
    }
  } else {
    return {
      isSubmit,
      newFormState
    }
  }
}

export const validateEntireLoginForm = (loginForm) => {
  let isSubmit = true;
  let newFormState = { ...loginForm };

  if (newFormState.username === '' && newFormState.usernameWarningMess === '') {
    isSubmit = false;
    newFormState.usernameWarningMess = 'Please enter your username';
  }
  if (newFormState.password === '' && newFormState.passwordWarningMess === '') {
    isSubmit = false;
    newFormState.passwordWarningMess = 'Please enter your password';
  }

  if (isSubmit) {
    if ((newFormState.username !== '' && newFormState.password !== '') &&
      (newFormState.usernameWarningMess === '' && newFormState.passwordWarningMess === '')) {
        return{
          isSubmit,
          dataToSubmit:{
            username: newFormState.username,
            password: newFormState.password
          }
        }
    } else {
      isSubmit = false;
      return {
        isSubmit,
        newFormState
      }
    }
  } else {
    return {
      isSubmit,
      newFormState
    }
  }
}