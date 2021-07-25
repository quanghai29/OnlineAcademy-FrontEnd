import RowCourse from "../RowCourse"
import ReactPaginate from 'react-paginate';
import styles from './ListRowCourse.module.scss'
import M from 'materialize-css/dist/js/materialize.min.js';
import { useState } from "react";

export default function ListRowCourse(props) {
  document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('select');
    let instances = M.FormSelect.init(elems, styles['task-sort']);
  });

  const [amountItemPerPage, setItemInPage] = useState(5);// amount of item per a page
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  const handlePageClick = (data) => {
    setSelectedPage(data.selected);
    let offset = Math.ceil(data.selected * amountItemPerPage);
    setOffset(offset);
  };

  return (
    <div className={styles['container']} id="search_result">
      <div className={styles['result-title']}>
        {props.data.courses.length} Kết quả tìm kiếm cho {`"${props.data.keyWord}"`}
      </div>
      <div className={styles['task-bar']}>
        <div className={styles['task-show']}>
          <span>Show 1-8 of 10 results</span>
          <div className={styles['show-option']}>Show:
            <ul>
              <li onClick={() => {
                setItemInPage(5);
                setOffset(0);
                setSelectedPage(0);
              }}
                className={
                  amountItemPerPage === 5 ? styles['amount-item-page--active'] : ''
                }>5</li>
              <li onClick={() => {
                setItemInPage(10);
                setOffset(0);
                setSelectedPage(0);
              }}
                className={
                  amountItemPerPage === 10 ? styles['amount-item-page--active'] : ''
                }>10</li>
              <li onClick={() => {
                setItemInPage(15);
                setOffset(0);
                setSelectedPage(0);
              }}
                className={
                  amountItemPerPage === 15 ? styles['amount-item-page--active'] : ''
                }
              >15</li>
            </ul>
          </div>
        </div>
        <div className={`input-field ${styles['custom-input-field']}`}>
          <span>Sắp xếp theo: </span>
          <select>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>

      {
        props.data.courses.slice(offset, offset + amountItemPerPage).map((item, index) => {
          return (
            <RowCourse data={item} key={index} />
          )
        })
      }

      <ReactPaginate pageCount={Math.ceil(
        props.data.courses.length / amountItemPerPage)}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        containerClassName={styles['container-pagination']}
        pageClassName={styles['li-pagination']}
        previousClassName={styles['li-pre-next']}
        nextClassName={styles['li-pre-next']}
        activeClassName={styles['page--active']}
        activeLinkClassName={styles['a--active']}
        onPageChange={handlePageClick}
        forcePage={selectedPage}
        disabledClassName={styles['disable-previous-next']}
      />
    </div>
  )
}