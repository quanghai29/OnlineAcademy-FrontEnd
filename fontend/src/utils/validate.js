export const isEmpty = (value) => {
  return value ? false : true
}

export const validateUsername = (username) => {
  const result = {
    isValid: false,
    warning: ''
  }

  if (!username) {
    result.warning = "Vui lòng không để trống trường này";
    return result;
  } else {
    result.isValid = true;
    return result;
  }
}

export const validatePassword = (password) => {
  const result = {
    isValid: false,
    warning: ''
  }
  if (!password) {
    result.warning = "Vui lòng không để trống trường này";
  } else {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    let isValidPassword = regex.test(password);
    if(isValidPassword){
      result.isValid = true;
    }else{
      result.warning = `Chứa ít nhất 8 kí tự bao gồm
      ít nhất 1 chữ in hoa, 1 chữ thường và 1 số`;
    }
  }

  return result;
}