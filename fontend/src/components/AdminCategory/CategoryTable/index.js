
import styles from "./CategoryTable.module.scss"

const CategoryTable = (props) => {
  function handleEditItem(e) {
    props.editItem(+e.target.id);
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
          { props.data.length>0 && props.data.map((item, index) => {
            return (
              <tr key={index}>
                <td>{props.startIndex + index + 1}</td>
                <td>{item.category_name}</td>
                <td>{item.last_update}</td>
                <td>{item.amount_course}</td>

                <td>
                  <span id={index} onClick={handleEditItem}
                    className={`material-icons ${styles['action-icon']}
                    ${styles['edit-icon']}`}>
                    edit
                  </span>
                  <span id={index} onClick={handleDeleteItem}
                    className={`material-icons ${styles['action-icon']}
                    ${styles['delete-icon']}`}>
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

export default CategoryTable;