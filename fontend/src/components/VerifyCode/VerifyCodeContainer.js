import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import { useDispatch, useSelector } from "react-redux"
import '../../styles/account.scss'
import { Link, useHistory} from "react-router-dom"
import {
  VALIDATE_CODE,
  SUBMIT_VERIFY_CODE_FORM,
  REQUEST_RESET_VERIFY_CODE_FORM
} from '../../redux/constants/actionTypes'
import Swal from 'sweetalert2';
import { useEffect } from "react"

export default function VerifyCodeContainer() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const verifyCodeState = { ...state.verifyCodeReducer };

  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';
  const spanValue = `Vui lòng kiểm tra email của bạn,
   và sau đó nhập mã otp đễ kích hoạt tài khoản!`;

  useEffect(() => {
    if (verifyCodeState.response.code === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Your account is activated!',
        showConfirmButton: true,
        allowOutsideClick: false
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('otpToken');
          dispatch({ type: REQUEST_RESET_VERIFY_CODE_FORM });
          history.push('/login');
        }
      })
    }
  }, [verifyCodeState.response.code, dispatch, history]);

  function submitVerifyCodeForm() {
    dispatch({
      type: SUBMIT_VERIFY_CODE_FORM,
      payload: { ...verifyCodeState.form }
    })
  }

  return (
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue={spanValue} />
            <InputValue type="text"
              placeholder="OTP-Code"
              style={{ marginBottom: "15px" }}
              name="verifyCode"
              actionType={VALIDATE_CODE}
              warningMess={verifyCodeState.form.warningMess}
              reducer='verifyCodeReducer'
            />
            <div className="small-text">
              <span>Bạn chưa có tài khoản?</span>
              <Link to='/signup'> Đăng kí</Link>
            </div>
            <ActionButton style={{ marginTop: "50px" }} action="Send"
              onClickActionButton={submitVerifyCodeForm} />
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}