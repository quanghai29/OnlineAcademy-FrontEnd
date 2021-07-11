import axios from 'axios'

const baseUrl = 'http://localhost:3001';
export async function submitSignUpForm(data) {
  const instance = axios.create({
    baseURL: baseUrl
  });

  return await instance.post('/account/signup', data).then(res => {
    localStorage.setItem('otpToken', res.data.otpToken);
    console.log('res sign up', res.data);
    return res.data;
  });
}

export async function submitVerifyCodeForm(data){
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'x-otp-token': localStorage.getItem('otpToken')
    }
  });
  // console.log('code to submit', data);
  return await instance.post('/account/verify-code', data).then(res => {
    console.log('api submit verify code', res.data);
    return res.data;
  });
}