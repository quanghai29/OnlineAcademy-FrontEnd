// import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss';

function MainNavigation() {
  if (window.location.pathname === '/course-overview'){
    return null;
  }
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img
          src='assets/images/header/Logo.png'
          alt="logo header"
        />
      </div>
      <div className={classes.menu}>
        <img
          className={classes.menuImg}
          src='assets/images/header/menu.png'
          alt="menu"
        />
        <p className={classes.menuTitle}>Danh mục</p>
      </div>
      <div className={classes.search}>
        <img
          src='assets/images/header/search.png'
          alt="search"
        />
        <input type="text" placeholder="Tìm kiếm khóa học"/>
      </div>
      <div className={classes.login}>
          <button>Đăng nhập</button>
          <button>Đăng ký</button>
      </div>
      {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/another'>Another</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default MainNavigation;
