import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
import bottomImg from '../../assets/images/account/bottom_img.png'
import topImg from '../../assets/images/account/top_img.png'
import { Link } from "react-router-dom"

export default function VerifyCode() {

  return (
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="" />
            <InputValue type="text" placeholder="OTP-Code"
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