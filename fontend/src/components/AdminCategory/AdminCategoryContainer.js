import AdminContainer from "../Admin/AdminContainer";
import styles from "./AdminCategory.module.scss";
import AdminTableContainer from "../AdminTable/AdminTableContainer";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../redux/actions/category"
import ModalContainer from "../Modal/ModalContainer";

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
  const [isShowFormModal, setIsShowFormModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
    console.log('edit item', item);
    setIsShowFormModal(true);
    setInputValue(categories[item].category_name)
  }

  function handleDeleteTableItem(item) {
    console.log('delete item', item);
  }

  function handleClickSelectedPage(data) {
    const selected = data.selected;
    let offset = Math.ceil(selected * perPage);
    setOffset(offset);
  }

  function handleClickCreateCategory(){
    setIsShowFormModal(true);
  }

  function handleClickCloseModal(){
    setIsShowFormModal(false);
    setInputValue('');
  }

  function handleClickSaveCategory(e){
    e.preventDefault();
    console.log('save category');
  }

  function handleOnchangeValue(e){
    setInputValue(e.target.value);
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
        isShowFormModal && <ModalContainer>
          <div className={styles['create-form-container']}>
            <div className={styles['close-modal-icon']}>
              <span onClick={handleClickCloseModal}>&times;</span>
            </div>
            <div className={styles['form-group']}>
              <form>
                <div>
                  <input type="text" placeholder="Tên danh mục" 
                  value={inputValue} onChange={handleOnchangeValue}/>
                </div>
                <div className={styles['form__footer']}>
                  <button onClick={handleClickSaveCategory}>Lưu</button>
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