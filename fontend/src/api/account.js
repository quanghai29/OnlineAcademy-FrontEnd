import {instance} from "../redux/axios/account"
import Swal from 'sweetalert2';
import jwt from 'jsonwebtoken';

export async function submitSignUpForm(data) {
  return await instance.post('/account/signup', data).then(res => {
    localStorage.setItem('otpToken', res.data.otpToken);
    return res.data;
  });
}

export async function submitVerifyCodeForm(data) {
  instance.defaults.headers.common['x-otp-token'] =
    localStorage.getItem('otpToken');

  try {
    return await instance.post('/account/verify-code', data).then(res => {
      return res.data;
    });
  } catch (err) {
    if (err.response) {
      if (err.response.status === 401) {//expired token
        const { value: email } = await Swal.fire({
          title: 'Your code is expired!',
          input: 'email',
          inputLabel: 'Input your email to get new code',
          inputPlaceholder: 'Enter your email address'
        })
        if (email) {
          try {
            await instance.post('/account/resend-code', { email }).then(
              res => {
                //console.log('res', res);
                res.data.otpToken && localStorage.setItem(
                  'otpToken', res.data.otpToken);
              }
            )
            Swal.fire(`We sent code to address: ${email}`);

          } catch (err) {
            if (err.response.status === 404) {
              Swal.fire(`Not found: ${email}`);
            }
          }
        }
      } else if (err.response.status === 440) {//the code is not correct
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'The code is not correct!',
        })
      }
    }
  }

}

export async function submitLoginForm(data) {
  try {
    const response = await instance.post('/auth', data);
    if (!response.data.shouldConfirmEmail) {
      if (response.data.authenticated) {
        const decoded = jwt.verify(response.data.accessToken,
          'HOA_ROI_CUA_PHAT');
        localStorage.setItem('decodePayload', JSON.stringify(decoded));
        localStorage.setItem('accessToken', response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Username or password is not correct!',
        })
      }
    }
    return {
      isAuth: response.data.authenticated,
      username: response.data.username || '',
      email: response.data.email || '',
      shouldConfirmEmail: response.data.shouldConfirmEmail
    };
  } catch (err) {
    console.log(err);
  }
}

export async function activeAccount(email) {
  const responseData = await instance.post(
    '/account/resend-code', { email })
  responseData.data.otpToken && localStorage.setItem(
    'otpToken', responseData.data.otpToken);
}