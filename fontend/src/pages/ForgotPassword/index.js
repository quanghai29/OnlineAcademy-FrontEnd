import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
import { Link } from "react-router-dom"

export default function ForgotPassword(){

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';
  return(
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Please enter your email to receive OTP-code" />
            <InputValue type="text" placeholder="Email address"
              style={{ marginBottom: "15px" }} />
            <div className="small-text">
              <span>Don’t have an account?</span>
              <Link to='/sign-up'> Sign Up</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }} action="Send" />
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}