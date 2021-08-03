import AdminContainer from "../Admin/AdminContainer";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import StudentTable from "./StudentTable";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchStudentData,
  requestDeleteStudentItem
} from "../../redux/actions/student";
import Swal from 'sweetalert2';


const AdminStudentContainer = () => {
  const studentState = useSelector(state => state.studentReducer);
  const { students,indexOfDeletedItem } = studentState;
  const dispatch = useDispatch();
  const perPage = 5;

  const headers = [
    'STT',
    'Username',
    'Họ tên',
    'Email',
    "Ngày tạo"
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    if ((indexOfDeletedItem === students?.length) &&
      (indexOfDeletedItem % 5 === 0)) {
      const amountPage = Math.ceil(students?.length / perPage);
      setSelectedPage(amountPage - 1);
    }
  }, [students, indexOfDeletedItem])

  useEffect(() => {
    dispatch(fetchStudentData());
  }, [dispatch]);

  useEffect(() => {
    if (students) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [students])

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
        data.id = students[index + offset].id;
        data.index = index + offset;
        dispatch(requestDeleteStudentItem(data));
      }
    })
  }

  function handleClickSelectedPage(data) {
    setSelectedPage(data.selected);
  }

  return (
    <AdminContainer title="Danh sách học viên"
      listIcon={<span className="material-icons">
        school
      </span>}>
      {
        !isLoading && <>
          <StudentTable headers={headers} data={pageData}
            startIndex={offset} deleteItem={handleDeleteTableItem}/>
          <PaginationContainer pageCount={Math.ceil(students.length / perPage)}
            pageRangeDisplayed={5} marginPagesDisplayed={2}
            handleClickSelectedPage={handleClickSelectedPage}
            selectedPage={selectedPage} />
        </>
      }
    </AdminContainer>
  )
}

export default AdminStudentContainer;