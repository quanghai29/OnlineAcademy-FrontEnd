import classes from './style.module.scss';
import { Link } from "react-router-dom";

export default function GuestNavbar() {
  return (
    <ul className={`left hide-on-med-and-down ${classes.header}`}>
      <li>
        <Link to='/login' className={`waves-effect waves-light btn ${classes.handleBtn}`}>
          Đăng Nhập
        </Link>
      </li>

      <li>
        <Link to="/signup" className={`waves-effect waves-light btn ${classes.handleBtn}`}>
          Đăng Ký
        </Link>
      </li>
    </ul>
  )
}