import AdminContainer from "../Admin/AdminContainer";
import styles from "./AdminCategory.module.scss";
import CategoryTable from "./CategoryTable";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  setCategoryWarning,
  submitCategoryForm,
  setIsShowFormModal,
  setCategoryInputValue,
  requestDeleteCategoryItem,
  setCategoryLoading
} from "../../redux/actions/admin_category"
import ModalContainer from "../Modal/ModalContainer";
import {
  REQUEST_EDIT_ADMIN_CATEGORY_ITEM,
  REQUEST_CREATE_ADMIN_CATEGORY_ITEM
}
  from "../../redux/constants/actionTypes";
import Swal from 'sweetalert2';
import PreLoading from "../PreLoading/index"


const AdminCategoryContainer = () => {
  const categoryState = useSelector(state => state.adminCategoryReducer);
  const { categories, indexOfDeletedItem, isLoading } = categoryState;
  const dispatch = useDispatch();
  const perPage = 5;

  //Tạo keys của headers trùng với keys của item trong tableData 
  const headers = [
    'STT',
    'Danh mục',
    'Ngày cập nhật',
    'Số lượng khóa học',
  ];

  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [editIndex, setEditIndex] = useState(-1);
  const [selectedPage, setSelectedPage] = useState(0);

  useEffect(() => {
    if ((indexOfDeletedItem === categories?.length) &&
      (indexOfDeletedItem % 5 === 0)) {
      const amountPage = Math.ceil(categories.length / perPage);
      setSelectedPage(amountPage - 1);
    }
  }, [categories, indexOfDeletedItem, categoryState]);

  useEffect(() => {
    dispatch(setCategoryLoading(true));
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    let offset = Math.ceil(selectedPage * perPage);
    setOffset(offset);
  }, [selectedPage])

  useEffect(() => {
    if (categoryState.categories?.length > 0) {
      const data = categoryState.categories.slice(offset, offset + perPage);
      setPageData(data);
    }
  }, [offset, categoryState])

  function handleEditTableItem(item) {
    dispatch(setIsShowFormModal(true));
    dispatch(setCategoryInputValue(categories[offset + item].category_name));
    setEditIndex(offset + item);
  }

  function handleDeleteTableItem(index) {
    if (categories[index + offset].amount_course > 0) {
      Swal.fire({
        title: 'Warning',
        text: `You won't be able to delete this category. Because it contains courses!`,
        icon: 'warning',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      })
    } else {
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
          data.id = categories[index + offset].id;
          data.index = index + offset;
          dispatch(requestDeleteCategoryItem(data));
        }
      })
    }
  }

  function handleClickSelectedPage(data) {
    setSelectedPage(data.selected);
  }

  function handleClickCreateCategory() {
    dispatch(setIsShowFormModal(true));
  }

  function handleClickCloseModal() {
    dispatch(setIsShowFormModal(false));
    dispatch(setCategoryInputValue(''));
    setEditIndex(-1);
    dispatch(setCategoryWarning(''));
  }

  function handleClickSubmitCategory(e) {
    e.preventDefault();
    let data = {};

    let date = new Date().toLocaleString("en-AU");
    let day = date.split(',')[0];

    data.category_name = categoryState.inputValue;

    if (editIndex >= 0) {//Edit
      data.id = categories[editIndex].id;
      data.last_update = day;
      data.index = +editIndex;
      data.categories = categories;
      dispatch(submitCategoryForm(REQUEST_EDIT_ADMIN_CATEGORY_ITEM, data));
      setEditIndex(-1);
    } else {// Create
      data.category_name = categoryState.inputValue;
      dispatch(submitCategoryForm(REQUEST_CREATE_ADMIN_CATEGORY_ITEM, data));
    }
  }

  function handleOnchangeValue(e) {
    dispatch(setCategoryInputValue(e.target.value));
  }

  let tableContent = null;
  if (isLoading) {
    tableContent = <div className={styles['loading--position']}>
      <PreLoading />
    </div>
  } else {
    tableContent = <>
      <CategoryTable headers={headers} data={pageData}
        editItem={handleEditTableItem} deleteItem={handleDeleteTableItem}
        startIndex={offset}
      />
      <PaginationContainer pageCount={Math.ceil(categories?.length / perPage)}
        pageRangeDisplayed={5} marginPagesDisplayed={2}
        handleClickSelectedPage={handleClickSelectedPage}
        selectedPage={selectedPage}
      />
    </>
  }

  return (
    <>
      <AdminContainer title="Danh sách category" listIcon={<span className="material-icons">
        format_list_bulleted
      </span>}>
        <div>
          <div className={styles['create-btn-container']}>
            <button onClick={handleClickCreateCategory}>
              <span className={`material-icons ${styles['icon']}`}>
                add_box
              </span>
              Tạo danh mục
            </button>
          </div>
        </div>
        {tableContent}
      </AdminContainer>
      {
        categoryState.isShowFormModal && <ModalContainer>
          <div className={styles['create-form-container']}>
            <div className={styles['close-modal-icon']}>
              <span onClick={handleClickCloseModal}>&times;</span>
            </div>
            <div className={styles['form-group']}>
              <form>
                <div>
                  {
                    categoryState.warningMess &&
                    <span className={styles['message--warning']}>
                      {categoryState.warningMess}</span>
                  }
                  <input type="text" placeholder="Tên danh mục"
                    value={categoryState.inputValue} onChange={handleOnchangeValue}
                    className={categoryState.warningMess ? styles['border--warning'] : ''}
                  />
                </div>
                <div className={styles['form__footer']}>
                  <button onClick={handleClickSubmitCategory}>Lưu</button>
                </div>
              </form>
            </div>
          </div>
        </ModalContainer>
      }
    </>
  )
}

export default AdminCategoryContainer;