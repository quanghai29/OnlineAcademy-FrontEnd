import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import { useDispatch, useSelector } from "react-redux"
import '../../styles/account.scss'
import { Link, useHistory } from "react-router-dom"
import { useEffect } from "react"
import {
  VALIDATE_USERNAME,
  VALIDATE_EMAIL,
  VALIDATE_PASSWORD,
  VALIDATE_CONFIRM_PASSWORD,
  SUBMIT_SIGNUP_FORM
} from '../../redux/constants/actionTypes'


export default function SignUp() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const signUpState = { ...state.signUpReducer };
  //console.log(signUpState);

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';

  const inputValueData = [
    {
      type: 'text',
      placeholder: 'Username',
      name: 'username',
      actionType: VALIDATE_USERNAME,
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
      actionType: VALIDATE_PASSWORD,
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
    if (!signUpState.isExist) {
      history.push('/verify-code');
    }
  }, [signUpState.isExist, history]);

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
              spanValue="Please create a new account here" />
            {
              inputValueData.map((item, index) => {
                return (
                  <InputValue type={item.type}
                    placeholder={item.placeholder}
                    style={{ marginBottom: "15px" }}
                    name={item.name}
                    actionType={item.actionType}
                    warningMess={item.warningMess}
                    reducer='signUpReducer'
                    key={index} />
                )
              })
            }
            <div className="small-text">
              <span>Already have an account?</span>
              <Link to='/log-in'>
                Log In</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }}
              action="Sign Up"
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