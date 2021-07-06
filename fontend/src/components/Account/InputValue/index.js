import './style.scss'

export default function InputValue(props){

  return(
    <div className={props.class} style={props.style}>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>
  )
}