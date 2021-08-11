import ActionButton from "../../components/Account/ActionButton"
import InputValue from "../../components/Account/InputValue"
import HeaderForm from "../../components/Account/HeaderForm"
import '../../styles/account.scss'
import {useHistory } from "react-router-dom"
import { useDispatch , useSelector} from "react-redux"
import {
  submitForgotPasswordForm,
  resetForgotPasswordState
} from "../../redux/actions/forgotPassword"
import { useEffect} from "react"
import Swal from 'sweetalert2'


export default function ForgotPasswordContainer() {
  const bottomImg = 'assets/images/account/bottom_img.png';
  const topImg = 'assets/images/account/top_img.png';
  const forgotPasswordState = useSelector(state=>state.forgotPasswordReducer);
  const {form, isExistedAcc} = forgotPasswordState;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(()=>{
    if(isExistedAcc){
      Swal.fire({
        title: 'Đi đến trang đăng nhập?',
        text: `Chúng tôi đã gửi mật khẩu mới đến email của bạn.
        Vui lòng kiểm tra email!`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(resetForgotPasswordState());
          history.push('/login');
        }
      })
    }
  }, [isExistedAcc, history, dispatch])
  function handleSubmitForm(){
    dispatch(submitForgotPasswordForm(form));
  }
  return (
    <div className="account__container">
      <div className="container__left-side">
        <img className="top-img" src={topImg} alt=""></img>
        <div className="container-form">
          <form>
            <HeaderForm class="form-header"
              spanValue="Vui lòng nhập email của bạn để nhận mật khẩu mới" />
            <InputValue placeholder="Email"
              name="email" type="text"
              actionType="VALIDATE_FORGOT_EMAIL"
              warningMess={form.warning}
              reducer="forgotPasswordReducer"
             />
            <ActionButton style={{ marginTop: "50px" }} action="Gửi" 
              onClickActionButton={handleSubmitForm}
            />
          </form>
        </div>
        <img className="bottom-img" src={bottomImg} alt=""></img>
      </div>
      <div className="container__right-side"></div>
    </div>
  )
}