import classes from './style.module.scss';
import { Link } from 'react-router-dom';
import StudentNavbar from './studentNavbar';
import LecturerNavbar from './lecturerNavbar';
import AdminNavbar from './adminNavbar';
import GuestNavbar from './guestNavbar';
import SearchNavbar from './searchNavbar';

function MainNavigation() {

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

        {/*Đã đăng nhập - Student + Guest */}
        <SearchNavbar/>

        {/*Chưa đăng nhập */}
        {/* <GuestNavbar/> */}

        {/*Đã đăng nhập - Student */}
        <StudentNavbar />

        {/*Đã đăng nhập - Lecturer */}
        {/* <LecturerNavbar/> */}

        {/*Đã đăng nhập - Admin */}
        {/* <AdminNavbar/> */}

      </div>
    </nav>
  );
}

export default MainNavigation;
