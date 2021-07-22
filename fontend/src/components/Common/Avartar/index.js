import React from "react";
import classes from './Avartar.module.scss';

//imgSrc = path image/ source base code
//nickname = fullname user
export default function Overview(props) {
  return (
    <div className="container center-align">
      {props.imgSrc && <img src={props.imgSrc} alt="avartar" className={`circle responsive-img ${classes.avartar}`}/> }
      {!props.imgSrc && props.avartar && <div className={`container ${classes.avartar} circle blue-grey white-text`}><h5 className="center-align" style={{margin: "1px 0"}}>{props.nickName[0]}</h5></div>}
      {!props.imgSrc && !props.avartar && <div className={`container ${classes.avartar} circle blue-grey white-text`}></div>}   
    </div>
  )
};


