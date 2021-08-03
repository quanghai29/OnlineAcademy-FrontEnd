import ActionButton from "../../components/Account/ActionButton"
// import InputValue from "../../components/Account/InputValue"
// import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
// import { Link } from "react-router-dom"

export default function ForgotPasswordContainer(){

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';
  return(
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            This is forgot password 
            <ActionButton style={{ marginTop: "50px" }} action="Send" />
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}