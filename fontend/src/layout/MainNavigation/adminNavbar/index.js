import classes from './style.module.scss';
import { Link } from "react-router-dom"
import Avartar from '../../../components/Common/Avartar';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function AdminNavbar() {
  const elems = document.querySelectorAll('.dropdown-trigger');
  // eslint-disable-next-line
  const instances = M.Dropdown.init(elems, {});
  
  return (
    <ul className="right hide-on-med-and-down">
      <li><Link to="/"><i className="large material-icons">notifications_none</i></Link></li>
      <li style={{ position: "relative" }}>

        {/* eslint-disable-next-line */}
        <a className={`dropdown-trigger btn ${classes.dropdown}`} href="#" data-target="dropdown1">
          <Avartar {...{ nickName: "Nancy momoland" }} />
        </a>

        <ul id="dropdown1" className={`dropdown-content ${classes.dropcontent}`}>

          <li>
            <div className="row">
              <div className="col m2" style={{ marginRight: "15px", marginTop: "10px" }}>
                <Avartar {...{ nickName: "Nancy momoland" }} />
              </div>
              <div className="col m9" style={{ marginTop: "10px" }}>
                <h6 style={{ color: "black !important" }}>Nancy Momoland</h6>
                <p>Tài khoản ban quản trị</p>
              </div>
            </div>
          </li>

          <li className="divider" tabIndex={-1} />

          <li><Link to="/"><i className="material-icons">person</i>Tài khoản của tôi</Link></li>
          <li><Link to="/"><i className="material-icons">view_list</i>Quản lý danh mục</Link></li>
          <li><Link to="/"><i className="material-icons">class</i>Quản lý khóa học</Link></li>
          <li><Link to="/"><i className="material-icons">school</i>Quản lý học sinh</Link></li>
          <li><Link to="/"><i className="material-icons">assignment_ind</i>Quản lý giảng viên</Link></li>
          <li><Link to="/"><i className="material-icons">keyboard_return</i>Đăng xuất</Link></li>
        </ul>
      </li>
    </ul>
  )
}