import React, {useEffect} from "react";
import classes from './Avartar.module.scss';

export default function Overview({imgSrc, nickName}) {
  useEffect(function () {
    
  });

  return (
    <div className="container center-align">
      {imgSrc && <img src="assets\images\home\girlBg.png" alt="avartar" className={`circle responsive-img ${classes.avartar}`}/> }

      <div className={`container ${classes.avartar} circle blue-grey center-align text-white`}>
        <h5>T</h5>
      </div>
    </div>
  )
};


