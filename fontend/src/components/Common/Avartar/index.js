import React from "react";
import classes from './Avartar.module.scss';

//imgSrc = path image/ source base code
//nickname = fullname user
export default function Overview({imgSrc, nickName}) {
  return (
    <div className="container center-align">
      {imgSrc && <img src={imgSrc} alt="avartar" className={`circle responsive-img ${classes.avartar}`}/> }
      {!imgSrc && <div className={`container ${classes.avartar} circle blue-grey white-text`}><h5 className="center-align" style={{margin: "1px 0"}}>{nickName[0]}</h5></div>}
    </div>
  )
};


