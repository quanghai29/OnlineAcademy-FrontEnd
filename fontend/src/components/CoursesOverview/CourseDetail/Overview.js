import React from "react";
import classes from './CourseDetail.module.scss';
import Avartar from '../../Common/Avartar';

export default function Overview() {

  return (
    <div className="row">
      <div className="col m4 offset-m1">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Giảng viên</span>
            <div className= "section">
              <Avartar nickName="Tuyết Trinh"/>
              <h6 className={`center-align ${classes.darkfontheader}`}>Tuyết trinh</h6>
            </div>
            <div className="section">
              <p className={`center-align ${classes.darkfonttext}`}>
                Drew Bridewell is a senior design specialist at InVision. 
                He also teaches user experience design on a weekly basis 
                to the community and also has piloted UX design programs for middle schools.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col m6">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text">
            <span className={`card-title center-align ${classes.headText}`}>Mô tả chi tiết</span>
            <div className= "section">
              <p className={`center-align ${classes.darkfonttext}`}>
                Drew Bridewell is a senior design specialist at InVision. 
                He also teaches user experience design on a weekly basis 
                to the community and also has piloted UX design programs for middle schools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


