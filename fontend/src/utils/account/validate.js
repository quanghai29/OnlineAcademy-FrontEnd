import * as functions from "../functions"

export const validateUsername = (username) => {
  let result = {
    data: username,
    warningMess: ''
  };
  const warning = functions.validateUsername(username);
  result.warningMess = warning;
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
  let formData = { ...signUpFormState };
  let newSignUpFormState = null;
  if (!formData.username && !formData.usernameWarningMess) {
    isSubmit = false;
    formData.usernameWarningMess = 'Vui lòng nhập vào username của bạn';
  }
  if (!formData.email && !formData.emailWarningMess) {
    isSubmit = false;
    formData.emailWarningMess = 'Vui lòng nhập email của bạn';
  }
  if (!formData.password && !formData.passwordWarningMess) {
    isSubmit = false;
    formData.passwordWarningMess = 'Vui lòng nhập mật khẩu của bạn';
  }
  if (!formData.confirmPassword && !formData.confirmPasswordWarningMess) {
    isSubmit = false;
    formData.confirmPasswordWarningMess = 'Vui lòng nhập lại mật khẩu!';
  }

  if (formData.usernameWarningMess || formData.emailWarningMess ||
    formData.passwordWarningMess || formData.confirmPasswordWarningMess) {
    isSubmit = false;
    newSignUpFormState = { ...formData };
  } else {
    newSignUpFormState = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      account_role: 3
    }
  }

  return {
    isSubmit,
    newSignUpFormState
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
  let formData = { ...verifyCodeFormState };
  let newFormState = null;

  if (formData.code === 0 && !formData.warningMess) {
    isSubmit = false;
    formData.warningMess = 'Vui lòng nhập vào mã xác thực';
  }

  if (formData.warningMess) {
    isSubmit = false;
    newFormState = { ...formData };
  } else {
    newFormState = {
      code: formData.code
    }
  }
  return {
    isSubmit,
    newFormState
  }
}

export const validateEntireLoginForm = (loginForm) => {
  let isSubmit = true;
  let formData = { ...loginForm };
  let newFormState = null;

  if (!formData.username && !formData.usernameWarningMess) {
    isSubmit = false;
    formData.usernameWarningMess = 'Vui lòng nhập username của bạn';
  }
  if (!formData.password && !formData.passwordWarningMess) {
    isSubmit = false;
    formData.passwordWarningMess = 'Vui lòng nhập mật khẩu của bạn';
  }


  if (formData.usernameWarningMess || formData.passwordWarningMess) {
    isSubmit = false;
    newFormState = { ...formData };
  } else {
    newFormState = {
      username: formData.username,
      password: formData.password
    }
  }
  return {
    isSubmit,
    newFormState
  }
}

export const validateEntireForgotPasswordForm = (form)=>{
  let isSubmit = true;
  let formData = { ...form };
  let newForm = null;

  if(!formData.email && !formData.warning){
    isSubmit=false;
    formData.warning = 'Vui lòng nhập email của bạn';
  }

  if(formData.warning){
    isSubmit = false;
    newForm={...formData};
  }else{
    newForm = {
      email: formData.email
    }
  }

  return{
    isSubmit,
    newForm
  }
}