import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import StudentNavbar from './studentNavbar';
import LecturerNavbar from './lecturerNavbar';
import AdminNavbar from './adminNavbar';
import GuestNavbar from './guestNavbar';
import SearchNavbar from './searchNavbar';
import {useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {ROLE_STUDENT, ROLE_LECTURER, ROLE_ADMIN} from '../../redux/constants/common'; 
import * as actionType from '../../redux/constants/actionTypes';

function MainNavigation() {
  const header = useSelector(state => state.header.data);
  const dispatch = useDispatch();

  useEffect(function(){
    dispatch({
      type: actionType.FETCH_HEADER
    })
  },[dispatch])

  //console.log(header);

  return (
    <nav className={classes.header}>
      <div className="nav-wrapper">

        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">
              <img src='assets/images/header/Logo.png' alt="logo header" />
            </Link>
          </li>
        </ul>

        {/* Đã/Chưa đăng nhập - Student + Guest */}
        {
          !header.isAuth  || (header.isAuth && header.role === ROLE_STUDENT)
          ? <SearchNavbar/>
          : <div></div>
        }

        {/* Chưa đăng nhập */}
        { !header.isAuth && <GuestNavbar /> }

        {/*Đã đăng nhập - Student */}
        { header.isAuth && header.role === ROLE_STUDENT && <StudentNavbar {...header}/> }

        {/*Đã đăng nhập - Lecturer */}
        { header.isAuth && header.role === ROLE_LECTURER && <LecturerNavbar {...header}/> }

        {/*Đã đăng nhập - Admin */}
        { header.isAuth && header.role === ROLE_ADMIN && <AdminNavbar {...header}/> }

      </div>
    </nav>
  );
}

export default MainNavigation;
