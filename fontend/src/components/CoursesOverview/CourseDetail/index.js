import React, { useEffect } from "react";
import classes from './style.module.scss';
import M from 'materialize-css/dist/js/materialize.min.js';
import Overview from './Overview/index';
import Content from './Content/index';
import Feedback from './Feedback/index';
//import { useDispatch, useSelector} from 'react-redux';
//import * as actionType from '../../../redux/constants/actionTypes';

export default function CourseOverview(props) {
  useEffect(function () {
    initTabs();
  });

  const initTabs = () => {
    const el = document.getElementById('tabs-swipe-video')
    M.Tabs.init(el, {});
  }

  return (
    <div className="row">
      <div className="col m12" style={{padding:0}}>
        <ul id="tabs-swipe-video" className={`tabs ${classes.containnercommon}`}>
          <li className="tab col m4"><a href="#overview">Tổng Quan</a></li>
          <li className="tab col m4"><a href="#content">Nội dung</a></li>
          <li className="tab col m4"><a href="#feedback">Đánh giá</a></li>
        </ul>
      </div>
      <div id="overview" className="col m12">
        <div className="section">
          <Overview {...props.overviewData}/>
        </div>
      </div>
      <div id="content" className="col m12">
        <div className="section">
          <Content {...{chapters: props.chapters}}/>
        </div>
      </div>
      <div id="feedback" className="col m12">
        <div className="section">
          <Feedback {...{
            course_id: props.course_id, 
            isFeedbacked: props.overviewData.isFeedbacked, 
            isRegister: props.overviewData.isRegister,
          }}/>
        </div>
      </div> 
    </div>
  )
};


