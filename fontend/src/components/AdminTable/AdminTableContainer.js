
import styles from "./AdminTableContainer.module.scss"

const AdminTableContainer = (props) => {
  const headerValues = [];
  const headerKeys = [];
  for (let key in props.headers) {
    headerKeys.push(key);
    headerValues.push(props.headers[key]);
  }
  console.log('header key', headerKeys);
  console.log('header value', headerValues)

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
            {headerValues?.map((item, index) => {
              return (
                <th key={index}>{item}</th>
              )
            })}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{props.startIndex + index + 1}</td>
                <td>{item[headerKeys[1]]}</td>
                <td>{item[headerKeys[2]]}</td>
                <td>{item[headerKeys[3]]}</td>
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