
import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
import bottomImg from '../../assets/images/account/bottom_img.png'
import topImg from '../../assets/images/account/top_img.png'
import { Link } from "react-router-dom"

export default function SignIn() {

  return (
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Sign in to your account to continue" />
            <InputValue type="text" placeholder="Username"
              style={{ marginBottom: "15px" }} />
            <InputValue type="password" placeholder="Password"
              style={{ marginBottom: "10px" }} />
            <div className="small-text">
              <Link to='/forgot-password'>Forgot password?</Link>
            </div>
            <ActionButton style={{marginTop: "50px"}} action="Sign in" />
            <div className="small-text" style={{marginTop: "10px"}}>
              <span>Don't have an account?</span>
              <Link to='/sign-up'> Sign Up</Link>
            </div>
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}