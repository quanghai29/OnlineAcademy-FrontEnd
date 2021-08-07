import { useDispatch, useSelector } from 'react-redux'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';

export default function InputValue(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const inputReducer = { ...state[props.reducer] };

  const [isVisibility, setIsVisibility] = useState(false);
  const [inputType, setInputType] = useState('text');

  useEffect(()=>{
    if(props.type === 'password' && !isVisibility){
      setInputType("password");
    }else{
      setInputType("text");
    }
  }, [props, isVisibility])

  function handleOnchange(e) {
    const data = props.name === 'confirmPassword' ? {
      password: inputReducer.form.password,
      confirmPassword: e.target.value
    } : e.target.value;
    dispatch({ type: props.actionType, payload: { data } })
  }

  function handleToggleVisibility() {
    setIsVisibility(!isVisibility);
  }

  let eyeIcon = null;
  if (isVisibility) {
    eyeIcon =
      <span className={`material-icons ${styles['eye-icon']}`}
        onClick={handleToggleVisibility}>
        visibility
      </span>

  } else {
    eyeIcon =
      <span className={`material-icons ${styles['eye-icon']}`}
        onClick={handleToggleVisibility}>
        visibility_off
      </span>
  }

  return (
    <div className={props.class} style={props.style}>
      {props.warningMess && <span className={styles['span--warning']}>
        {props.warningMess}</span>}
      <div style={{position:"relative"}}>
        <input type={inputType}
          placeholder={props.placeholder}
          value={inputReducer.form[props.name]}
          onChange={(e) => handleOnchange(e)}
          className={`${styles['input-ele']}
        ${props.warningMess ? styles['border--warning'] : ''}`}
          autoComplete={props.type === "password" ? "current-password" : "none"}
        />
        {
          props.type === 'password' && inputReducer.form[props.name] && eyeIcon
        }
      </div>
    </div>
  )
}
