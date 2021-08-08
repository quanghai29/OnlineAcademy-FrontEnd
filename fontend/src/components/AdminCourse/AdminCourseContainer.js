import AdminContainer from "../Admin/AdminContainer";
import CourseTable from "./CourseTable";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import styles from "./AdminCourse.module.scss"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminCourse,
  requestDeleteAdminCourseItem
} from "../../redux/actions/admin_course"
import Swal from 'sweetalert2';

const AdminCourseContainer = () => {
  const courseState = useSelector(state => state.adminCourseReducer);
  const dispatch = useDispatch();
  const { courses, indexOfDeletedItem } = courseState;
  const perPage = 5;
  const headers = [
    "STT",
    "Khóa học",
    "Ngày tạo",
    "Cập nhật lần cuối",
    "Trạng thái",
    "Người tạo"
  ]

  const [isLoading, setIsLoading] = useState(true);
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
    dispatch(fetchAdminCourse());
  }, [dispatch]);

  useEffect(() => {
    if (courses) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [courses])

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

  function handleDeleteTableItem(index) {
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {};
        data.id = courses[index + offset].course_id;
        data.index = index + offset;
        dispatch(requestDeleteAdminCourseItem(data));
      }
    })
  }

  function handleOpenItem(index) {
    console.log('open item at', offset + index);
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
        {
          !isLoading &&
          <>
            <CourseTable headers={headers} data={pageData}
              startIndex={offset} deleteItem={handleDeleteTableItem}
              openItem={handleOpenItem} />
            <PaginationContainer pageCount={Math.ceil(courses?.length / perPage)}
              pageRangeDisplayed={5} marginPagesDisplayed={2}
              handleClickSelectedPage={handleClickSelectedPage}
              selectedPage={selectedPage} />
          </>

        }
      </AdminContainer>
    </>
  )
}

export default AdminCourseContainer;