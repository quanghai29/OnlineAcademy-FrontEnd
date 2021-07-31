import AdminContainer from "../Admin/AdminContainer";
import styles from "./AdminCategory.module.scss";
import AdminTableContainer from "../AdminTable/AdminTableContainer";
import PaginationContainer from "../PaginationContainer/PaginationContainer";
import {useEffect, useState} from 'react'

const AdminCategoryContainer = () => {
  const perPage = 5;

  //Tạo keys của headers trùng với keys của item trong tableData 
  const headers = {
    stt:'STT',
    category_name: 'Danh mục',
    last_update:'Ngày cập nhật',
    amount_course:'Số lượng khóa học',
    
  }; 

  const tableData = [
    {id: 1,category_name: 'Lập trình web',last_update: '07/04/2021', amount_course: 20},
    {id: 2,category_name: 'Lập trình mobile',last_update: '07/04/2021', amount_course: 20},
    {id: 3,category_name: 'Lập trình C/C++',last_update: '07/04/2021', amount_course: 20},
    {id: 4,category_name: 'Lập trình game',last_update: '07/04/2021', amount_course: 20},
    {id: 5,category_name: 'Lập trình dữ liệu',last_update: '07/04/2021', amount_course: 20},
    {id: 5,category_name: 'Lập trình AI',last_update: '07/04/2021', amount_course: 20}
  ]

  const [pageData, setPageData] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(()=>{
    const data = tableData.slice(offset, offset+perPage);
    setPageData(data);
  }, [offset])

  function handleEditTableItem(item){
    console.log('edit item', item);
  }

  function handleDeleteTableItem(item){
    console.log('delete item', item);
  }

  function handleClickSelectedPage(data){
    const selected = data.selected;
    let offset = Math.ceil(selected * perPage);
    setOffset(offset);

  }

  return (
    <AdminContainer title="Danh sách category">
      <div>
        <div className={styles['create-btn-container']}>
          <button>
            <span className={`material-icons ${styles['icon']}`}>
              add_box
            </span>
            Tạo danh mục
          </button>
        </div>
        <AdminTableContainer headers={headers} data={pageData}
          editItem={handleEditTableItem} deleteItem={handleDeleteTableItem}
          startIndex={offset}
        />
      </div>
      <PaginationContainer pageCount={Math.ceil(tableData.length/perPage)}
        pageRangeDisplayed={5} marginPagesDisplayed={2}
        handleClickSelectedPage={handleClickSelectedPage}
      />
    </AdminContainer>
  )
}

export default AdminCategoryContainer;