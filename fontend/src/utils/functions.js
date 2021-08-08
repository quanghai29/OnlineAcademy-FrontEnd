export const isEmpty = (value) => {
  return value ? false : true
}

export const validateUsername = (username) => {
  let warningMess = '';
  // eslint-disable-next-line
  const regex = /^[\x00-\x7F]+$/;
  if(!username){
    warningMess = "Vui lòng không để trống trường này";
    return warningMess;
  }else if(!regex.test(username.toLowerCase())){
    warningMess = "Tên đăng nhập là kí tự latin không dấu";
    return warningMess;
  }else if(username.includes(" ")){
    warningMess = "Vui lòng viết liền không khoảng trắng";
    return warningMess;
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