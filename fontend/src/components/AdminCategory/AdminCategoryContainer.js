import AdminContainer from "../Admin/AdminContainer";
import styles from "./AdminCategory.module.scss";
import AdminTableContainer from "../AdminTable/AdminTableContainer";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategory,
  setCategoryWarning,
  submitCategoryForm,
  setIsShowFormModal,
  setCategoryInputValue
} from "../../redux/actions/category"
import ModalContainer from "../Modal/ModalContainer";
import { REQUEST_EDIT_CATEGORY_ITEM, REQUEST_CREATE_CATEGORY_ITEM }
  from "../../redux/constants/actionTypes";

const AdminCategoryContainer = () => {
  const categoryState = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();
  const perPage = 5;

  //Tạo keys của headers trùng với keys của item trong tableData 
  const headers = {
    stt: 'STT',
    category_name: 'Danh mục',
    last_update: 'Ngày cập nhật',
    amount_course: 'Số lượng khóa học',
  };

  const [isLoading, setIsLoading] = useState(true);
  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [categories, setCategories] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  useEffect(() => {
    if (categoryState.categories) {
      setCategories(categoryState.categories);
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [categoryState])

  useEffect(() => {
    if (categories.length > 0) {
      const data = categories.slice(offset, offset + perPage);
      setPageData(data);
    }
  }, [offset, categories])

  function handleEditTableItem(item) {
    dispatch(setIsShowFormModal(true));
    dispatch(setCategoryInputValue(categories[offset+item].category_name));
    setEditIndex(offset+item);
  }

  function handleDeleteTableItem(item) {
    console.log('delete item', item);
  }

  function handleClickSelectedPage(data) {
    const selected = data.selected;
    let offset = Math.ceil(selected * perPage);
    setOffset(offset);
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
      dispatch(submitCategoryForm(REQUEST_EDIT_CATEGORY_ITEM, data));
    } else {// Create
      data.category_name = categoryState.inputValue;
      dispatch(submitCategoryForm(REQUEST_CREATE_CATEGORY_ITEM, data));
    }
  }

  function handleOnchangeValue(e) {
    dispatch(setCategoryInputValue(e.target.value));
  }

  return (
    <>
      <AdminContainer title="Danh sách category">
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
        {
          !isLoading && <>
            <AdminTableContainer headers={headers} data={pageData}
              editItem={handleEditTableItem} deleteItem={handleDeleteTableItem}
              startIndex={offset}
            />
            <PaginationContainer pageCount={Math.ceil(categories.length / perPage)}
              pageRangeDisplayed={5} marginPagesDisplayed={2}
              handleClickSelectedPage={handleClickSelectedPage}
            />
          </>
        }
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