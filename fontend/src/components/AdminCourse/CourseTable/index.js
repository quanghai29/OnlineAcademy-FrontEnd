import styles from "./CourseTable.module.scss"
import { DOMAIN_API } from "../../../redux/constants/common"

const CourseTable = (props) => {

  function handleOpenItem(e) {
    props.openItem(+e.target.id);
  }

  function handleLockItem(e) {
    props.lockItem(+e.target.id);
  }

  function handleUnlockItem(e) {
    props.unlockItem(+e.target.id);
  }

  return (
    <div className={styles['table-container']}>
      <table className={styles['admin-table']}>
        <thead>
          <tr>
            {props.headers.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.length > 0 && props.data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{props.startIndex + index + 1}</td>
                  <td>
                    <div className={styles['course-column']}>
                      <div className={styles['course-column__img']}>
                        <img src={`${DOMAIN_API}/common/media/image/${item.img_source}`} alt={item.img_title} />
                      </div>
                      <div className={styles['course-column__text']}>
                        <span className={item.enable_status === 1 ? styles['title'] : styles['disable-account']}>
                          {item.title}
                        </span>
                        <span className={item.enable_status === 1 ? styles['short-description'] : styles['disable-account']}>
                          {item.short_description}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className={item.enable_status === 1 ? '' : styles['disable-account']}>
                    {item.create_date}
                  </td>
                  <td className={item.enable_status === 1 ? '' : styles['disable-account']}>
                    {item.last_update}
                  </td>
                  <td className={item.enable_status === 1 ? '' : styles['disable-account']}>
                    {item.course_status ? "Đã hoàn thành" : "Chưa hoàn thành"}
                  </td>
                  <td className={item.enable_status === 1 ? '' : styles['disable-account']}>
                    {item.creator}
                  </td>
                  <td>
                    {
                      item.enable_status === 1 ? <>
                        <span id={index} onClick={handleOpenItem}
                          className={`material-icons ${styles['action-icon']} 
                          ${styles['open-in-new-icon']}`}>
                          open_in_new
                        </span>
                        <span id={index} onClick={handleLockItem}
                          className={`material-icons ${styles['action-icon']}
                          ${styles['delete-icon']}`}>
                          lock
                        </span>
                      </>
                        : <span id={index} onClick={handleUnlockItem}
                          className={`material-icons ${styles['action-icon']}
                          ${styles['delete-icon']}`}>
                          lock_open
                        </span>
                    }
                  </td>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default CourseTable;