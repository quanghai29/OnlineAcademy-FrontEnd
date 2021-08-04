import LecturerTable from "./LecturerTable";
import AdminContainer from "../Admin/AdminContainer"
import PaginationContainer from "../PaginationContainer/PaginationContainer"
import ModalContainer from "../Modal/ModalContainer"
import styles from "./AdminLecturer.module.scss"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLecturerData
} from "../../redux/actions/admin_lecturer"

const AdminLecturerContainer = () => {
  const lecturerState = useSelector(state => state.adminLecturerReducer);
  const { lecturers } = lecturerState;
  const dispatch = useDispatch();
  const perPage = 5;

  const headers = [
    "STT",
    "Tên đăng nhập",
    "Mật khẩu",
    "Email",
    "Ngày tạo",
    "Người tạo"
  ]
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  // useEffect(() => {
  //   if ((indexOfDeletedItem === students?.length) &&
  //     (indexOfDeletedItem % 5 === 0)) {
  //     const amountPage = Math.ceil(students?.length / perPage);
  //     setSelectedPage(amountPage - 1);
  //   }
  // }, [students, indexOfDeletedItem])

  useEffect(() => {
    dispatch(fetchLecturerData());
  }, [dispatch]);

  useEffect(() => {
    if (lecturers) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [lecturers])

  useEffect(() => {
    let offset = Math.ceil(selectedPage * perPage);
    setOffset(offset);
  }, [selectedPage])

  useEffect(() => {
    if (lecturers?.length > 0) {
      const data = lecturers?.slice(offset, offset + perPage);
      setPageData(data);
    }
  }, [offset, lecturers, lecturerState])

  function handleClickCloseModal() {

  }

  function handleClickSubmitLecturer() {

  }

  function handleDeleteLecturerItem(index) {
    console.log('delete at', offset + index);
  }

  function handleOpenLecturerItem(index) {
    console.log('open at', offset + index);
  }

  function handleClickSelectedPage(data) {
    setSelectedPage(data.selected);
  }
  return (
    <AdminContainer title="Danh sách giảng viên"
      listIcon={<i className="fas fa-chalkboard-teacher"></i>}>
      <div>
        <div className={styles['create-btn-container']}>
          <button >
            <span className={`material-icons ${styles['icon']}`}>
              add_box
            </span>
            Thêm tài khoản
          </button>
        </div>
      </div>

      {
        !isLoading && <>
          <LecturerTable headers={headers} data={pageData} startIndex={offset}
            deleteItem={handleDeleteLecturerItem} openItem={handleOpenLecturerItem}
          />
          <PaginationContainer pageCount={Math.ceil(lecturers?.length / perPage)}
            pageRangeDisplayed={5} marginPagesDisplayed={2}
            handleClickSelectedPage={handleClickSelectedPage}
            selectedPage={selectedPage} />
        </>
      }
      {/* <ModalContainer>
          <div className={styles['create-form-container']}>
            <div className={styles['close-modal-icon']}>
              <span onClick={handleClickCloseModal}>&times;</span>
            </div>
            <div className={styles['form-group']}>
              <form>
                <div>
                  {
                    // categoryState.warningMess &&
                    // <span className={styles['message--warning']}>
                    //   {categoryState.warningMess}</span>
                  }
                  <input type="text" placeholder="Tên danh mục"
    
                  />
                </div>
                <div className={styles['form__footer']}>
                  <button onClick={handleClickSubmitLecturer}>Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </ModalContainer> */}
    </AdminContainer>
  )
}

export default AdminLecturerContainer;