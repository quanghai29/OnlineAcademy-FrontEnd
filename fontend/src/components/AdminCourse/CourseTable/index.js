import styles from "./CourseTable.module.scss"

const CourseTable = (props) => {

  function handleOpenItem(e) {
    props.openItem(+e.target.id);
  }

  function handleDeleteItem(e) {
    props.deleteItem(+e.target.id);
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
                        <img src={`http://localhost:3001/common/media/image/${item.img_source}`} alt={item.img_title} />
                      </div>
                      <div className={styles['course-column__text']}>
                        <span className={styles['title']}>{item.title}</span>
                        <span>{item.short_description}</span>
                      </div>
                    </div>
                  </td>
                  <td>{item.create_date}</td>
                  <td>{item.last_update}</td>
                  <td>{item.course_status?"Đã hoàn thành" : "Chưa hoàn thành"}</td>
                  <td>{item.creator}</td>
                  <td>
                    <span id={index} onClick={handleOpenItem}
                      className={`material-icons ${styles['open-in-new-icon']}`}>
                      open_in_new
                    </span>
                    <span id={index} onClick={handleDeleteItem}
                      className={`material-icons ${styles['delete-icon']}`}>
                      delete
                    </span>
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