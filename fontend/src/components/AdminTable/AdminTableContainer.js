
import styles from "./AdminTableContainer.module.scss"

const AdminTableContainer = (props) => {
  const headers = props.headers


  function handleEditItem(e) {
    props.editItem(e.target.id);
  }

  function handleDeleteItem(e) {
    props.deleteItem(e.target.id);
  }

  return (
    <div className={styles['table-container']}>
      <table className={styles['admin-table']}>
        <thead>
          <tr>
            {headers.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{props.startIndex +index + 1}</td>
                <td>{item.category_name}</td>
                <td>{item.last_update}</td>
                <td>{item.amount_course}</td>
                <td>
                  <span id={item.id} onClick={handleEditItem}
                    className={`material-icons ${styles['edit-icon']}`}>
                    edit
                  </span>
                  <span id={item.id} onClick={handleDeleteItem}
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

export default AdminTableContainer;