import AdminContainer from "../Admin/AdminContainer";
import CourseTable from "./CourseTable";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import styles from "./AdminCourse.module.scss"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminCourse,
  requestLockCourseItem,
  setCourseLoading,
  requestUnlockCourseItem
} from "../../redux/actions/admin_course"
import Swal from 'sweetalert2';
import { useHistory } from "react-router-dom";
import PreLoading from "../PreLoading/index"

const AdminCourseContainer = () => {
  const courseState = useSelector(state => state.adminCourseReducer);
  const dispatch = useDispatch();
  const { courses, indexOfDeletedItem, isLoading } = courseState;
  const perPage = 5;
  const headers = [
    "STT",
    "Khóa học",
    "Ngày tạo",
    "Cập nhật lần cuối",
    "Trạng thái",
    "Người tạo"
  ];

  let history = useHistory();

  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    if ((indexOfDeletedItem === courses?.length) &&
      (indexOfDeletedItem % 5 === 0)) {
      const amountPage = Math.ceil(courses?.length / perPage);
      setSelectedPage(amountPage - 1);
    }
  }, [courses, indexOfDeletedItem, courseState]);

  useEffect(() => {
    dispatch(setCourseLoading(true));
    dispatch(fetchAdminCourse());
  }, [dispatch]);

  useEffect(() => {
    let offset = Math.ceil(selectedPage * perPage);
    setOffset(offset);
  }, [selectedPage])

  useEffect(() => {
    if (courses?.length > 0) {
      const data = courses?.slice(offset, offset + perPage);
      setPageData(data);
    }
  }, [offset, courses, courseState])

  function handleClickSelectedPage(data) {
    setSelectedPage(data.selected);
  }

  function handleChooseOptionSort() {

  }

  function handleLockItem(index) {
    Swal.fire({
      title: 'Bạn có chắc muốn lock khóa học này không?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Lock it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const id = courses[index + offset].course_id;
        dispatch(requestLockCourseItem(id));
      }
    })
  }

  function handleUnlockItem(index){
    const id = courses[index + offset].course_id;
    dispatch(requestUnlockCourseItem(id));
  }

  function handleOpenItem(index) {
    history.push({
      pathname: '/course-overview',
      state: {
        course_id: courses[index + offset].course_id
      }
    })
  }

  let tableContent = null;
  if (isLoading) {
    tableContent = <div className={styles['loading--position']}>
      <PreLoading />
    </div>
  } else {
    tableContent = <>
      <CourseTable headers={headers} data={pageData}
        startIndex={offset} lockItem={handleLockItem}
        openItem={handleOpenItem} unlockItem={handleUnlockItem}/>
      <PaginationContainer pageCount={Math.ceil(courses?.length / perPage)}
        pageRangeDisplayed={5} marginPagesDisplayed={2}
        handleClickSelectedPage={handleClickSelectedPage}
        selectedPage={selectedPage} />
    </>

  }

  return (
    <>
      <AdminContainer title="Danh sách khóa học" listIcon={<span className="material-icons">
        video_library
      </span>}>
        <div className={styles['sorted-container']}>
          <div className={`input-field ${styles['custom-input-field']}`}>
            <span>Lọc theo: </span>
            <select onChange={handleChooseOptionSort}>
              <option value={0}>Giảm dần theo ngày tạo</option>
              <option value={1}>Tăng dần theo ngày tạo</option>
            </select>
          </div>
        </div>
        {tableContent}
      </AdminContainer>
    </>
  )
}

export default AdminCourseContainer;