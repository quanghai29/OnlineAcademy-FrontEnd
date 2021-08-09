import LecturerTable from "./LecturerTable";
import AdminContainer from "../Admin/AdminContainer"
import PaginationContainer from "../PaginationContainer/PaginationContainer"
import ModalContainer from "../Modal/ModalContainer"
import styles from "./AdminLecturer.module.scss"
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLecturerData,
  requestDeleteLecturerItem,
  setIsShowLecturerFormModal,
  setLecturerUsername,
  setLecturerPassword,
  requestCreateLecturerItem
} from "../../redux/actions/admin_lecturer"
import Swal from 'sweetalert2';

const AdminLecturerContainer = () => {
  const lecturerState = useSelector(state => state.adminLecturerReducer);
  const { lecturers, indexOfDeletedItem, isShowFormModal, form } = lecturerState;
  const dispatch = useDispatch();
  const perPage = 5;

  const headers = [
    "STT",
    "Tên đăng nhập",
    "Email",
    "Ngày tạo",
    "Người tạo"
  ]
  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);
  const [isVisibility, setIsVisibility] = useState(false);

  useEffect(() => {
    if ((indexOfDeletedItem === lecturers?.length) &&
      (indexOfDeletedItem % 5 === 0)) {
      const amountPage = Math.ceil(lecturers?.length / perPage);
      setSelectedPage(amountPage - 1);
    }
  }, [lecturers, indexOfDeletedItem, lecturerState]);

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
    dispatch(setIsShowLecturerFormModal(false));
  }

  function handleClickSubmitLecturer(e) {
    e.preventDefault();
    const data = {
      username: form.username,
      password: form.password,
      creator: 'admin'
    };

    dispatch(requestCreateLecturerItem(data));
  }

  function handleDeleteLecturerItem(index) {
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
        data.id = lecturers[index + offset].id;
        data.index = index + offset;
        dispatch(requestDeleteLecturerItem(data));
      }
    })
  }

  function handleOpenLecturerItem(index) {
    //lecturer_id = lecturers[index + offset].id
    console.log('open at', offset + index);
  }

  function handleClickSelectedPage(data) {
    setSelectedPage(data.selected);
  }

  function handleClickCreateLecturer() {
    dispatch(setIsShowLecturerFormModal(true));
  }

  function handleOnchangeUsername(e) {
    dispatch(setLecturerUsername(e.target.value));
  }

  function handleOnchangePassword(e) {
    dispatch(setLecturerPassword(e.target.value));
  }

  function handleToggleVisibility() {
    setIsVisibility(!isVisibility);
  }

  let eyeIcon = null;
  if (isVisibility) {
    eyeIcon = <span className={`material-icons ${styles['eye-icon']}`}
      onClick={handleToggleVisibility}
    >
      visibility
    </span>
  } else {
    eyeIcon = <span className={`material-icons ${styles['eye-icon']}`}
      onClick={handleToggleVisibility}>
      visibility_off
    </span>
  }

  return (
    <>
      <AdminContainer title="Danh sách giảng viên"
        listIcon={<i className="fas fa-chalkboard-teacher"></i>}>
        <div>
          <div className={styles['create-btn-container']}>
            <button onClick={handleClickCreateLecturer}>
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

      </AdminContainer>
      {
        isShowFormModal && <ModalContainer>
          <div className={styles['create-form-container']}>
            <div className={styles['close-modal-icon']}>
              <span onClick={handleClickCloseModal}>&times;</span>
            </div>
            <div className={styles['form-group']}>
              <form>
                <div className={styles['input-group']}>
                  {
                    form.usernameWarning &&
                    <span className={styles['message--warning']}>
                      {form.usernameWarning}</span>
                  }
                  <input type="text" placeholder="Tên đăng nhập"
                    value={form.username} onChange={handleOnchangeUsername}
                    className={form.usernameWarning ? styles['border--warning'] : ''}
                  />
                </div>
                <div className={styles['input-group']}>
                  {
                    form.passwordWarning &&
                    <span className={styles['message--warning']}>
                      {form.passwordWarning}</span>
                  }
                  <div style={{position:"relative"}}>
                    <input type={isVisibility ? "text" : "password"} placeholder="Mật khẩu"
                      value={form.password} onChange={handleOnchangePassword}
                      className={form.passwordWarning ? styles['border--warning'] : ''}
                    />
                    {
                      form.password && eyeIcon
                    }
                  </div>
                </div>
                <div className={styles['form__footer']}>
                  <button onClick={handleClickSubmitLecturer}>Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </ModalContainer>
      }
    </>
  )
}

export default AdminLecturerContainer;