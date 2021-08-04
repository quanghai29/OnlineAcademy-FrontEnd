import classes from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  FETCH_SEARCH_COURSE
} from "../../../redux/constants/actionTypes"
import { setSearchText } from "../../../redux/actions/searchCourse";
import { Link, useHistory } from "react-router-dom";
import { fetchCategory } from "../../../redux/actions/category";
import { useEffect } from 'react';

export default function SearchNavbar() {
  const searchCourseState = useSelector(state => state.searchCourseReducer)
  const categoryState = useSelector(state => state.categoryReducer.categories);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(function () {
    dispatch(fetchCategory());
  }, [dispatch])

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

  console.log(categoryState)
  return (
    <ul className="left hide-on-med-and-down">
      <li className={classes.menu}>

        {/* eslint-disable-next-line */}
        <a className={`dropdown-trigger waves-effect waves-light btn ${classes.menuIcon}`} href="#" data-target="category">
          <i className="material-icons left">menu</i>
          Danh mục
        </a>

        <ul id="category" className={`dropdown-content ${classes.dropcontent}`}>
          {
            categoryState
            &&
            categoryState.map(item => {
              return (
                <li className={`row ${classes.item}`}>
                  <div className="col m9">
                    <Link to="/" key={item.id}>{item.category_name}</Link>
                  </div>
                  <div className="col m2">
                    <div className="chip red white-text">{item.amount_course}</div>
                  </div>
                </li>
              )
            })
          }
        </ul>

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