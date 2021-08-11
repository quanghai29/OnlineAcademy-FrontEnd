import ActionButton from "../Account/ActionButton"
import InputValue from "../Account/InputValue"
import HeaderForm from "../Account/HeaderForm"
import { useDispatch, useSelector } from "react-redux"
import '../../styles/account.scss'
import { Link, useHistory } from "react-router-dom"
import { useEffect } from "react"
import {
  VALIDATE_SIGN_UP_USERNAME,
  VALIDATE_EMAIL,
  VALIDATE_SIGN_UP_PASSWORD,
  VALIDATE_CONFIRM_PASSWORD,
  SUBMIT_SIGNUP_FORM,
  REQUEST_RESET_SIGN_UP_FORM
} from '../../redux/constants/actionTypes'
import Swal from 'sweetalert2';


export default function SignupContainer() {
  const signUpState = useSelector(state => state.signUpReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';

  const inputValueData = [
    {
      type: 'text',
      placeholder: 'Username',
      name: 'username',
      actionType: VALIDATE_SIGN_UP_USERNAME,
      warningMess: signUpState.form.usernameWarningMess
    },
    {
      type: 'text',
      placeholder: 'Email',
      name: 'email',
      actionType: VALIDATE_EMAIL,
      warningMess: signUpState.form.emailWarningMess
    },
    {
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      actionType: VALIDATE_SIGN_UP_PASSWORD,
      warningMess: signUpState.form.passwordWarningMess
    },
    {
      type: 'password',
      placeholder: 'Confirm password',
      name: 'confirmPassword',
      actionType: VALIDATE_CONFIRM_PASSWORD,
      warningMess: signUpState.form.confirmPasswordWarningMess
    }
  ]

  useEffect(() => {
    if (signUpState.response.code === 201) {
      Swal.fire({
        icon: 'success',
        title: 'Sign up successfully',
        showConfirmButton: true,
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch({ type: REQUEST_RESET_SIGN_UP_FORM });
          history.push('/verify-code');
        }
      })
    }
  }, [signUpState.response.code, history, dispatch]);

  function submitSignupForm() {
    dispatch({ type: SUBMIT_SIGNUP_FORM, payload: signUpState.form });
  }

  return (
    <div className="account__container">
      <div className='container__left-side'>
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Tạo một tài khoản tại đây" />
            {
              inputValueData.map((item, index) => {
                return (
                  <InputValue type={item.type}
                    placeholder={item.placeholder}
                    style={{ marginBottom: "5px" }}
                    name={item.name}
                    actionType={item.actionType}
                    warningMess={item.warningMess}
                    reducer='signUpReducer'
                    key={index} />
                )
              })
            }
            <div className="small-text">
              <span>Bạn đã có tài khoản?</span>
              <Link to='/login'>
                Đăng nhập</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }}
              action="Đăng kí"
              onClickActionButton={submitSignupForm}
            />
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}