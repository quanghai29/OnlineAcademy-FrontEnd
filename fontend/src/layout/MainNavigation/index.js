// import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_SEARCH_COURSE
} from "../../redux/constants/actionTypes"
import { setSearchText } from "../../redux/actions/searchCourse";
import { Link } from "react-router-dom"

function MainNavigation() {
  const searchCourseState = useSelector(state => state.searchCourseReducer)
  const dispatch = useDispatch();

  function handleClickSearchCourse(e) {
    e.preventDefault();
    dispatch({
      type: FETCH_SEARCH_COURSE, 
      payload: searchCourseState.text
    })
  }

  if (window.location.pathname === '/course-overview') {
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
        <form>
          <input type="text" placeholder="Tìm kiếm khóa học"
            value={searchCourseState.text}
            onChange={
              (e) => {
                dispatch(setSearchText(e.target.value))
              }
            }
          />
          <button className={classes['search-btn']}
          onClick={(e) => handleClickSearchCourse(e) }>Search</button>
        </form>
      </div>
      <div className={classes.login}>
        <button>
          <Link to="/login">Đăng nhập</Link>
        </button>
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
