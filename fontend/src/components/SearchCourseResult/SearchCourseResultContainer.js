import RowCourse from "../RowCourse"
import styles from './SearchCourse.module.scss'
// import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect, useState } from "react";
import * as _ from "lodash";
import PreLoading from "../PreLoading/index"
import PaginationContainer from "../PaginationContainer/PaginationContainer";

//props:{
// courses: []
//}
export default function SearchCourseResultContainer(props) {
  // document.addEventListener('DOMContentLoaded', function () {
  //   let elems = document.querySelectorAll('select');
  //   M.FormSelect.init(elems, styles['task-sort']);
  // });


  let courses = props.data;
  const { isLoading } = props;

  const [amountItemPerPage, setItemInPage] = useState(5);// amount of item per a page
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [sortedData, setSortedData] = useState([]);
  const [orderBy, setOrderBy] = useState('avg_vote');
  const [orderDir, setOrderDir] = useState('desc');

  const handleClickSelectedPage = (data) => {
    setSelectedPage(data.selected);
    let offset = Math.ceil(data.selected * amountItemPerPage);
    setOffset(offset);
  };

  useEffect(() => {
    setSelectedPage(0);
    setOffset(0);

  }, [props.text_search])

  useEffect(() => {
    let elmnt = document.getElementById("search_result");
    if (elmnt)
      elmnt.scrollIntoView();
  }, [courses]);


  useEffect(() => {
    if (courses) {
      let data = _.orderBy(courses, [orderBy], [orderDir]);
      setSortedData(data);
    }
  }, [courses, orderBy, orderDir]);

  const optionSort = [
    { orderBy: 'avg_vote', orderDir: 'desc' },
    { orderBy: 'avg_vote', orderDir: 'asc' },
    { orderBy: 'price', orderDir: 'desc' },
    { orderBy: 'price', orderDir: 'asc' },
  ]

  function handleChooseOptionSort(e) {
    const index = e.target.value;
    setOrderBy(optionSort[index].orderBy);
    setOrderDir(optionSort[index].orderDir)
  }

  let contentEle = null;
  if (isLoading) {
    contentEle = <div className={styles['loading--position']}>
      <PreLoading />
    </div>
  } else {
    contentEle =
      <>
        {
          sortedData.slice(offset, offset + amountItemPerPage).map((item, index) => {
            return (
              <RowCourse data={item} key={index} />
            )
          })
        }

        <PaginationContainer pageCount={Math.ceil(
          courses?.length / amountItemPerPage)}
          pageRangeDisplayed={5}
          marginPagesDisplayed={2}
          handleClickSelectedPage={handleClickSelectedPage}
          selectedPage={selectedPage}
        />
      </>
  }

  return (
    <>
      <div className={styles['container']} id="search_result">
        <div className={styles['result-title']}>
          {
            !isLoading && <>
              {courses?.length || 0} Kết quả tìm kiếm cho {`"${props.text_search || ''}"`}
            </>
          }

        </div>
        <div className={styles['task-bar']}>
          <div className={styles['task-show']}>
            <span>
              Hiển thị {courses?.length >= amountItemPerPage ?
                `${offset + 1}-${offset + amountItemPerPage} `
                : `${offset + 1}-${offset + courses?.length || 0} `}
              của {courses?.length} kết quả
            </span>
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
            <select onChange={handleChooseOptionSort}>
              <option value={0}>Giảm dần theo lượt vote</option>
              <option value={1}>Tăng dần theo lượt vote</option>
              <option value={2}>Giảm dần theo giá</option>
              <option value={3}>Tăng dần theo giá</option>
            </select>
          </div>
        </div>
        {contentEle}
      </div>
    </>
  )
}