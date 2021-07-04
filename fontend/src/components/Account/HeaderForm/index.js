
export default function HeaderForm(props) {

  const headerFormImg = 'assets/images/account/header_form.png';
  return (
    <div className={props.class}>
      <img src={headerFormImg} alt=""></img>
      <br></br>
      <span>{props.spanValue}</span>
    </div>
  )
}