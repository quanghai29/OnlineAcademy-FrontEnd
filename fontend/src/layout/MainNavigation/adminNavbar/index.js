import classes from './style.module.scss';
import { Link, useHistory } from "react-router-dom"
import Avartar from '../../../components/Common/Avartar';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useDispatch } from 'react-redux';
import * as actionType from '../../../redux/constants/actionTypes'
import { useEffect } from 'react';

export default function AdminNavbar(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  
  useEffect(function(){
    const elems = document.querySelectorAll('.dropdown-trigger');
    // eslint-disable-next-line
    const instances = M.Dropdown.init(elems, {});
  },[props])

  const logout = ()=>{
    dispatch({
      type: actionType.FETCH_LOGOUT
    })
    history.push('/');
  }

  return (
    <ul className="right hide-on-med-and-down">
      <li><Link to="/"><i className="large material-icons">notifications_none</i></Link></li>
      <li style={{ position: "relative" }}>

        {/* eslint-disable-next-line */}
        <a className={`dropdown-trigger btn ${classes.dropdown}`} data-target="dropdown1">
          <Avartar  {...{ nickName: props.fullname, imgSrc: props.img_source }} />
        </a>

        <ul id="dropdown1" className={`dropdown-content ${classes.dropcontent}`}>

          <li>
            <div className="row">
              <div className="col m2" style={{ marginRight: "15px", marginTop: "10px" }}>
                <Avartar  {...{ nickName: props.fullname, imgSrc: props.img_source }} />
              </div>
              <div className="col m9" style={{ marginTop: "10px" }}>
                <h6 style={{ color: "black !important" }}>{props.fullname}</h6>
                <p>Tài khoản ban quản trị</p>
              </div>
            </div>
          </li>

          <li className="divider" tabIndex={-1} />

          <li><Link to="/update-profile"><i className="material-icons">person</i>Tài khoản của tôi</Link></li>
          <li><Link to="/admin-category"><i className="material-icons">view_list</i>Quản lý danh mục</Link></li>
          <li><Link to="/admin-course"><i className="material-icons">class</i>Quản lý khóa học</Link></li>
          <li><Link to="/admin-student"><i className="material-icons">school</i>Quản lý học sinh</Link></li>
          <li><Link to="/admin-lecturer"><i className="material-icons">assignment_ind</i>Quản lý giảng viên</Link></li>
          
          {/* eslint-disable-next-line */}
          <li><a onClick={logout}><i className="material-icons">keyboard_return</i>Đăng xuất</a></li>
        </ul>
      </li>
    </ul>
  )
}