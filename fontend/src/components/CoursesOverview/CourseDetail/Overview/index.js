import React from "react";
import classes from './style.module.scss';
import Avartar from '../../../Common/Avartar';

export default function Overview(props) {

  return (
    <div className="row">
      <div className="col m4 offset-m1">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Giảng viên</span>
            <div className= "section center-align">
              <Avartar imgSrc={props.lecturer_imgprofile} nickName={props.lecturer_name}/>
              <h6 className={`center-align ${classes.darkfontheader}`}>{props.lecturer_name}</h6>
            </div>
            <div className="section center-align">
              <p className={`center-align ${classes.darkfontheader}`}>{props.lecturer_headline}</p>
              <p className={`center-align ${classes.darkfonttext}`}>{props.lecturer_description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col m6">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Mô tả chi tiết</span>
            <div className= "section">
              <p className={`center-align ${classes.darkfonttext}`}>{props.full_description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


