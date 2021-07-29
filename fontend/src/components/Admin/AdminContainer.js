import PaginationContainer from "../PaginationContainer/PaginationContainer";
import { Link } from "react-router-dom";
import styles from "./AdminContainer.module.scss"

const AdminContainer = ({ children, title }) => {
  return (
    <div className={styles['admin-container']}>
      <div className={styles['link-group']}>
        <Link to='/'>
          <span className={`material-icons ${styles['icon']}`}>keyboard_backspace</span>
          <span className={styles['text']}>Home</span>
        </Link>
      </div>
      <div className={styles['admin__title']}>
        <span className={styles['title']}>{title}</span>
        <span class="material-icons">
          format_list_bulleted
        </span>
      </div>
      <div className={styles['children-content']}>
        {children}
      </div>
      <PaginationContainer pageCount={10}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
      />
    </div>
  )
}

export default AdminContainer;