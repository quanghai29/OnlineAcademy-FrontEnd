
export const validateUsername = (username) => {
  let result = {};
  result = username ? { warningMess: '', data: username }
    : { warningMess: 'Please enter a valid full name!' }
  return result;
}

export const validateEmail = (email) => {
  if (email === "") {
    return {
      warningMess: 'Vui lòng nhập vào một email hợp lệ!',
      data: ''
    }
  } else {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidEmail = re.test(String(email).toLowerCase());

    return isValidEmail ? { warningMess: '', data: email }
      : { warningMess: 'Email không hợp lệ!', data: email }
  }
}

export const confirmPassword = (data) => {
  let result = {};
  if (data.confirmPassword === '') {
    result.warningMess = 'Vui lòng nhập lại mật khẩu!';
  } else {
    if (data.password !== data.confirmPassword) {
      result.warningMess = 'Mật khẩu không khớp';
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
    result = { warningMess: 'Vui lòng nhập vào mật khẩu!' };
  } else {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let isValidPassword = regex.test(password);

    result = isValidPassword ? { warningMess: '', data: password }
      : {
        warningMess: `Chứa ít nhất 8 kí tự bao gồm
      ít nhất 1 chữ in hoa, 
       1 chữ thường và 1 số`,
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
    newSignUpFormState.usernameWarningMess = 'Vui lòng nhập vào username của bạn';
  }
  if (newSignUpFormState.email === '' &&
    newSignUpFormState.emailWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.emailWarningMess = 'Vui lòng nhập email của bạn';
  }
  if (newSignUpFormState.password === '' &&
    newSignUpFormState.passwordWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.passwordWarningMess = 'Vui lòng nhập mật khẩu của bạn';
  }
  if (newSignUpFormState.confirmPassword === '' &&
    newSignUpFormState.confirmPasswordWarningMess === '') {
    isSubmit = false;
    newSignUpFormState.confirmPasswordWarningMess = 'Vui lòng nhập lại mật khẩu!';
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
    : { warningMess: 'Vui lòng nhập mã xác thực' }

  return result;
}

export const validateEntireVerifyCodeForm = (verifyCodeFormState) => {

  let isSubmit = true;
  let newFormState = { ...verifyCodeFormState };

  if (newFormState.code === 0 &&
    newFormState.warningMess === '') {
    isSubmit = false;
    newFormState.warningMess = 'Vui lòng nhập vào mã xác thực';
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
    newFormState.usernameWarningMess = 'Vui lòng nhập username của bạn';
  }
  if (newFormState.password === '' && newFormState.passwordWarningMess === '') {
    isSubmit = false;
    newFormState.passwordWarningMess = 'Vui lòng nhập mật khẩu của bạn';
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