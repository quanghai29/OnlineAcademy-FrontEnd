import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
import bottomImg from '../../assets/images/account/bottom_img.png'
import topImg from '../../assets/images/account/top_img.png'
import { Link } from "react-router-dom"

export default function SignUp() {

  return (
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Please create a new account here" />
            <InputValue type="text" placeholder="Username"
              style={{ marginBottom: "15px" }} />
               <InputValue type="text" placeholder="Email address"
              style={{ marginBottom: "15px" }} />
            <InputValue type="password" placeholder="Password"
              style={{ marginBottom: "10px" }} />
               <InputValue type="password" placeholder="Confirm password"
              style={{ marginBottom: "10px" }} />
            <div className="small-text">
              <span>Already have an account?</span>
              <Link to='/sign-in'> Sign In</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }} action="Sign Up" />
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}