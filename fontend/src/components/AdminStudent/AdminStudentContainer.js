import AdminContainer from "../Admin/AdminContainer";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import StudentTable from "./StudentTable";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentData,
  requestBlockStudentItem,
  setStudentLoading,
  requestUnlockStudentItem
} from "../../redux/actions/admin_student";
import Swal from 'sweetalert2';
import { useHistory } from "react-router";
import PreLoading from "../PreLoading/index";
import styles from "./AdminStudent.module.scss";


const AdminStudentContainer = () => {
  const studentState = useSelector(state => state.adminStudentReducer);
  const { students, indexOfDeletedItem, isLoading } = studentState;
  const dispatch = useDispatch();
  const perPage = 5;
  const history = useHistory();

  const headers = [
    'STT',
    'Tên đăng nhập',
    'Họ tên',
    'Email',
    "Ngày tạo"
  ];

  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    if ((indexOfDeletedItem === students?.length) &&
      (indexOfDeletedItem % 5 === 0)) {
      const amountPage = Math.ceil(students?.length / perPage);
      setSelectedPage(amountPage - 1);
    }
  }, [students, indexOfDeletedItem, studentState]);

  useEffect(() => {
    dispatch(setStudentLoading(true));
    dispatch(fetchStudentData());
  }, [dispatch]);

  useEffect(() => {
    let offset = Math.ceil(selectedPage * perPage);
    setOffset(offset);
  }, [selectedPage])

  useEffect(() => {
    if (students?.length > 0) {
      const data = students?.slice(offset, offset + perPage);
      setPageData(data);
    }
  }, [offset, students, studentState])

  function handleLockItem(index) {
    Swal.fire({
      title: 'Bạn có chắc muốn khóa tài khoản này?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Lock it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const data = {};
        data.id = students[index + offset].id;
        dispatch(requestBlockStudentItem(data));
      }
    })
  }

  function handleUnlockItem(index){
    const {id} = students[index + offset];
    dispatch(requestUnlockStudentItem(id));
  }

  function handleClickSelectedPage(data) {
    setSelectedPage(data.selected);
  }

  function handleOpenItem(index) {
    history.push({
      pathname: '/profile',
      state: {
        user_id: students[index + offset].id
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
      <StudentTable headers={headers} data={pageData}
        startIndex={offset} lockItem={handleLockItem}
        openItem={handleOpenItem} unlockItem={handleUnlockItem}/>
      <PaginationContainer pageCount={Math.ceil(students?.length / perPage)}
        pageRangeDisplayed={5} marginPagesDisplayed={2}
        handleClickSelectedPage={handleClickSelectedPage}
        selectedPage={selectedPage} />
    </>
  }

  return (
    <AdminContainer title="Danh sách học viên"
      listIcon={<span className="material-icons">
        school
      </span>}>
      {tableContent}
    </AdminContainer>
  )
}

export default AdminStudentContainer;