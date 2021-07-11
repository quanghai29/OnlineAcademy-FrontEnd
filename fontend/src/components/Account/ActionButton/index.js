import styles from './ActionButton.module.scss'

export default function ActionButton(props) {
  function handleOnClick(e){
    e.preventDefault();
    props.onClickActionButton();
  }

  return (
    <button style={props.style} 
     onClick={handleOnClick}
     className = {styles['button-ele']}>
      {props.action}
    </button>
  )
}