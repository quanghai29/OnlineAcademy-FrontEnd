import { useDispatch, useSelector } from 'react-redux'
import styles from './InputValue.module.scss'

export default function InputValue(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const inputReducer = { ...state[props.reducer] };

  function handleOnchange(e) {
    const data = props.name === 'confirmPassword' ? {
      password: inputReducer.form.password,
      confirmPassword: e.target.value
    } : e.target.value;
    dispatch({ type: props.actionType, payload: { data } })
  }

  return (
    <div className={props.class} style={props.style}>
      {props.warningMess && <span className={styles['span--warning']}>
        {props.warningMess}</span>}
      <input type={props.type}
        placeholder={props.placeholder}
        value={inputReducer.form[props.name]}
        onChange={(e) => handleOnchange(e)}
        className={`${styles['input-ele']}
        ${props.warningMess? styles['border--warning']: ''}`}
      />
    </div>
  )
}
