import styles from "./StudentTable.module.scss"

const StudentTable = (props) => {

  function handleOpenItem(e) {
    props.openItem(+e.target.id);
  }

  function handleLockItem(e) {
    props.lockItem(+e.target.id);
  }

  function handleUnlockItem(e){
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
                  <td className={item.enable === 1 ? '' : styles['disable-account']}>{item.username}</td>
                  <td className={item.enable === 1 ? '' : styles['disable-account']}>{item.fullname}</td>
                  <td className={item.enable === 1 ? '' : styles['disable-account']}>{item.email}</td>
                  <td className={item.enable === 1 ? '' : styles['disable-account']}>{item.create_date}</td>
                  <td>
                    {
                      item.enable === 1 ? <>
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

export default StudentTable;