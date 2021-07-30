import AdminContainer from "../Admin/AdminContainer";
import styles from "./AdminCategory.module.scss";
import AdminTableContainer from "../AdminTable/AdminTableContainer";

const AdminCategoryContainer = () => {
  return (
    <AdminContainer title="Danh sách category">
      <div>
        <div className={styles['create-btn-container']}>
          <button>
            <span class={`material-icons ${styles['icon']}`}>
              add_box
            </span>
            Tạo danh mục
          </button>
          <AdminTableContainer/>
        </div>
      </div>
    </AdminContainer>
  )
}

export default AdminCategoryContainer;