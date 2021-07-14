import axios from 'axios'
import Swal from 'sweetalert2';

const baseUrl = 'http://localhost:3001';
const instance = axios.create({
  baseURL: baseUrl
});

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
          try{
            await instance.post('/account/resend-code', { email }).then(
              res => {
                console.log('res', res);
                res.data.otpToken && localStorage.setItem(
                  'otpToken', res.data.otpToken);
              }
            )
            Swal.fire(`We sent code to address: ${email}`);
            
          }catch(err){
            if(err.response.status===404){
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