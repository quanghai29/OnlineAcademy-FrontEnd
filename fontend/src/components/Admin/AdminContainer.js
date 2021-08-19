import { Link } from "react-router-dom";
import styles from "./AdminContainer.module.scss"

const AdminContainer = ({ children, title , listIcon }) => {
  return (
    <div className={styles['admin-container']}>
      <div className={styles['link-group']}>
        <Link to='/' style={{width: "75px"}}>
          <span className={`material-icons ${styles['icon']}`}>keyboard_backspace</span>
          <span className={styles['text']}>Home</span>
        </Link>
      </div>
      <div className={styles['admin__title']}>
        <span className={styles['title']}>{title}</span>
        {listIcon}
      </div>
      <div className={styles['children-content']}>
        {children}
      </div>
    </div>
  )
}

export default AdminContainer;