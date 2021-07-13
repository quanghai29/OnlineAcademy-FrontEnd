
import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  VALIDATE_USERNAME,
  VALIDATE_PASSWORD,
  SUBMIT_LOG_IN_FORM
} from "../../redux/constants/actionTypes"

export default function LogIn() {
  const loginState = useSelector(state => state.loginReducer)
  const dispatch = useDispatch();
  console.log(loginState);

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';

  const inputValueData = [
    {
      type: 'text',
      placeholder: 'Username',
      name: 'username',
      actionType: VALIDATE_USERNAME,
      warningMess: loginState.form.usernameWarningMess
    },
    {
      type: 'password',
      placeholder: 'Password',
      name: 'password',
      actionType: VALIDATE_PASSWORD,
      warningMess: loginState.form.passwordWarningMess
    }
  ]

  function submitLoginForm(){
    dispatch({type: SUBMIT_LOG_IN_FORM, payload:{...loginState.form}})
  }

  return (
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Sign in to your account to continue" />

            {
              inputValueData.map((item, index) => {
                return (
                  <InputValue placeholder={item.placeholder}
                    name={item.name} type={item.type}
                    actionType={item.actionType}
                    warningMess={item.warningMess}
                    reducer="loginReducer"
                    key={index} />
                )
              })
            }
            <div className="small-text">
              <Link to='/forgot-password'>Forgot password?</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }} action="Log in"
            onClickActionButton={submitLoginForm}
            />
            <div className="small-text" style={{ marginTop: "10px" }}>
              <span>Don't have an account?</span>
              <Link to='/signup'> Sign Up</Link>
            </div>
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}