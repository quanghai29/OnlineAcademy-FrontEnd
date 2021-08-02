import styles from "./ModalContainer.module.scss"

const ModalContainer = ({children})=>{

  return(
    <div className={styles['modal-container']}>
      <div className={styles['modal-content']}>
        {children}
      </div>
    </div>
  )
}

export default ModalContainer