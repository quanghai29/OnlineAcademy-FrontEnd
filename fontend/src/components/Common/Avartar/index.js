import React from "react";
import classes from './Avartar.module.scss';
import { DOMAIN_API } from "../../../redux/constants/common";

// imgSrc = path image/ source base code
// nickname = fullname user
export default function Overview(props) {
  return (
    <div className="container center-align">
      {
        props.imgSrc 
        &&
        <div className={`container ${classes.avartar} circle blue-grey white-text`}>
          <img 
            className={`circle responsive-img ${classes.avartar}`}
            src={`${DOMAIN_API}/common/media/image/${props.imgSrc}`} 
            alt="avartar"
            onError={
              (e)=>{e.target.onerror = null;
              e.target.src="/assets/images/account/avatar.png"
            }}
          /> 
        </div>
      }

      {
        !props.imgSrc 
        && 
        props.nickName 
        && 
        <div className={`container ${classes.avartar} circle blue-grey white-text`}>
          <h6 className="center-align" style={{margin: "1px 0"}}>{props.nickName[0]}</h6>
        </div>
      }

      {
        !props.imgSrc 
        && 
        !props.nickName 
        && 
        <div className={`container ${classes.avartar} circle blue-grey white-text`}>
          <img 
            className={`circle responsive-img ${classes.avartar}`}
            src="/assets/images/account/avatar.png"
            alt="avartar"
          /> 
        </div>
      }   
    </div>
  )
};


