import classes from './style.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import * as actionType from '../../../redux/constants/actionTypes';

export default function SearchNavbar() {
  const categoryState = useSelector(state => state.category.data);

  const dispatch = useDispatch();
  const history = useHistory();
  const elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {});
  const [text_search, setTextSearch] = useState('');

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_CATEGORY
    });
  }, [dispatch])

  function handleClickSearchCourse(e) {
    e.preventDefault();
    if (text_search) {
      history.push(`/search-result?text_search=${text_search}`);
    } else {
      return;
    }
  }

  return (
    <ul className="left hide-on-med-and-down">
      <li className={classes.menu}>

        {/* eslint-disable-next-line */}
        <a className={`dropdown-trigger waves-effect waves-light btn ${classes.menuIcon}`} data-target="category">
          <i className="material-icons left">menu</i>
          Danh mục
        </a>

        <ul id="category" className={`dropdown-content ${classes.dropcontent}`}>
          {
            categoryState
            &&
            categoryState.map(item => {
              return (
                <li key={item.id} className={`row ${classes.item}`}>
                  <div className="col m9">
                    <Link to={{
                      pathname: "/course-of-category",
                      state: {
                        category_id: item.id,
                        category_name: item.category_name,
                        amount_course: item.amount_course,
                      },
                    }}>
                      {item.category_name}
                    </Link>
                  </div>
                  <div className="col m2">
                    <h6 className={classes.amount}>{item.amount_course}</h6>
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
            value={text_search}
            onChange={
              (e) => {
                setTextSearch(e.target.value)
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