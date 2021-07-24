import RowCourse from "../RowCourse"
import ReactPaginate from 'react-paginate';
import styles from './ListRowCourse.module.scss'
import M from 'materialize-css/dist/js/materialize.min.js';

export default function ListRowCourse(props) {
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, styles['task-sort']);
  });

  return (
    <div className={styles['container']}>
      <div className={styles['task-bar']}>
        <div className={styles['task-show']}>
          <span>Show 1-8 of 10 results</span>
          <div className={styles['show-option']}>Show:
            <ul>
              <li>5</li>
              <li>10</li>
              <li>15</li>
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
        props.arrData.map((item, index)=>{
          return(
            <RowCourse data={item} key={index}/>
          )
        })
      }

      <ReactPaginate pageCount={5} pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      containerClassName={styles['container-pagination']}
      pageClassName={styles['li-pagination']}
      previousClassName={styles['li-pre-next']}
      nextClassName={styles['li-pre-next']}
      activeClassName={styles['page--active']}
      activeLinkClassName={styles['a--active']}
      />
    </div>
  )
}