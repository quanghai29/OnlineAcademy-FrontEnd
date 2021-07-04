
import './style.scss'

export default function ActionButton(props){

  return(
    <button style={props.style}>{props.action}</button>
  )
}