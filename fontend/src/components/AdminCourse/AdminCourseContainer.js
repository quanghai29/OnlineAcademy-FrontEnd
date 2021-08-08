import AdminContainer from "../Admin/AdminContainer";
import CourseTable from "./CourseTable";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import styles from "./AdminCourse.module.scss"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminCourseContainer = () => {
  const dispatch = useDispatch();
  const courses = [];
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

  // useEffect(() => {
  //   if ((indexOfDeletedItem === courses?.length) &&
  //     (indexOfDeletedItem % 5 === 0)) {
  //     const amountPage = Math.ceil(courses?.length / perPage);
  //     setSelectedPage(amountPage - 1);
  //   }
  // }, [courses, indexOfDeletedItem, lecturerState]);

  useEffect(() => {
    // dispatch(fetchLecturerData());
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

  // useEffect(() => {
  //   if (courses?.length > 0) {
  //     const data = courses?.slice(offset, offset + perPage);
  //     setPageData(data);
  //   }
  // }, [offset, courses, lecturerState])

  function handleClickSelectedPage(){

  }

  function handleChooseOptionSort() {

  }

  function handleDeleteTableItem(index){

  }

  function handleOpenItem(index){

  }

  return (
    <>
      <AdminContainer title="Danh sách khóa học" listIcon={<span className="material-icons">
        video_library
      </span>}>
        <div>
          <div className={styles['sorted-container']}>
            <div className={`input-field ${styles['custom-input-field']}`}>
              <span>Lọc theo: </span>
              <select onChange={handleChooseOptionSort}>
                <option value={0}>Giảm dần theo lượt vote</option>
                <option value={1}>Tăng dần theo lượt vote</option>
                <option value={2}>Giảm dần theo giá</option>
                <option value={3}>Tăng dần theo giá</option>
              </select>
            </div>
          </div>
        </div>

        <>
          <CourseTable headers={headers} data={courses}
            startIndex={offset} deleteItem={handleDeleteTableItem} 
            openItem={handleOpenItem}/>
          <PaginationContainer pageCount={Math.ceil(courses?.length / perPage)}
            pageRangeDisplayed={5} marginPagesDisplayed={2}
            handleClickSelectedPage={handleClickSelectedPage}
            selectedPage={selectedPage} />
        </>
      </AdminContainer>
    </>
  )
}

export default AdminCourseContainer;