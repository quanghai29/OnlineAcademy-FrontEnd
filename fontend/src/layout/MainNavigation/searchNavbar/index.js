import classes from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_SEARCH_COURSE
} from "../../../redux/constants/actionTypes"
import { setSearchText } from "../../../redux/actions/searchCourse";
import { Link, useHistory } from "react-router-dom";

export default function SearchNavbar() {
  const searchCourseState = useSelector(state => state.searchCourseReducer)
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClickSearchCourse(e) {
    e.preventDefault();
    if (searchCourseState.text) {
      dispatch({
        type: FETCH_SEARCH_COURSE,
        payload: searchCourseState.text
      });
      history.push('/search-result');
    } else {
      return;
    }
  }
  return (
    <ul className="left hide-on-med-and-down">
      <li className={classes.menu}>
        <Link className={`waves-effect waves-light btn ${classes.menu}`} to="/">
          <i className="material-icons left">menu</i>
          Danh mục
        </Link>
      </li>

      <li className={classes.search}>
        <form style={{ display: "flex", position: "relative" }}>
          <input type="text" placeholder="Tìm kiếm khóa học"
          value={searchCourseState.text}
          onChange={
            (e) => {
              dispatch(setSearchText(e.target.value))
            }
          }
          />

          <button className={`waves-effect waves-light btn ${classes.searchBtn}`}
            onClick={(e) => handleClickSearchCourse(e)}>
            <i className="material-icons">search</i>
          </button>
        </form>
      </li>
    </ul>
  )
}