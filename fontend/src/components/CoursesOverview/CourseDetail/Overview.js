import React from "react";
import classes from './CourseDetail.module.scss';
import Avartar from '../../Common/Avartar';

export default function Overview() {

  return (
    <div className="row">
      <div className="col m3 offset-m1">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Giảng viên</span>
            <div className= "row">
              <Avartar/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


