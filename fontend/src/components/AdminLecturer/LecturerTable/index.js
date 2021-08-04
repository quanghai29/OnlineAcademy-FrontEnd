import styles from "./LecturerTable.module.scss"

const LecturerTable = (props) => {
  function handleOpenItem(e) {
    props.openItem(+e.target.id);
  }

  function handleDeleteItem(e) {
    props.deleteItem(+e.target.id);
  }

  function handleEditItem(e){
    props.editItem(+e.target.id)
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
                  <td>{item.username}</td>
                  <td>**********************</td>
                  <td>{item.email}</td>
                  <td>{item.create_date}</td>
                  <td>{item.creator}</td>
                  <td>
                    <span id={index} onClick={handleOpenItem}
                      className={`material-icons ${styles['open-in-new-icon']}`}>
                      open_in_new
                    </span>
                    <span id={index} onClick={handleEditItem}
                    className={`material-icons ${styles['edit-icon']}`}>
                    edit
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

export default LecturerTable;