import React, { useEffect } from "react";
import classes from './style.module.scss';
import M from 'materialize-css/dist/js/materialize.min.js';
import Overview from './Overview/index';
import Content from './Content/index';
import Feedback from './Feedback/index';
import { useDispatch, useSelector} from 'react-redux';
import * as actionType from '../../../redux/constants/actionTypes';

export default function CourseOverview({course_id = 1}) {
  const courseOverview = useSelector((state) => state.courseOverview);
  const {chapters, ...overviewData} = courseOverview.data;
  const dispatch = useDispatch();

  useEffect(function () {
    initTabs();
    dispatch({
      type: actionType.FETCH_COURSE_OVERVIEW,
      payload: {
        course_id: course_id
      }
    })
  },[dispatch,course_id]);

  const initTabs = () => {
    const el = document.getElementById('tabs-swipe-video')
    M.Tabs.init(el, {});
  }

  console.log(chapters)

  return (
    <div className="row">
      <div className="col s12" style={{padding:0}}>
        <ul id="tabs-swipe-video" className={`tabs ${classes.containnercommon}`}>
          <li className="tab col s4"><a href="#overview">Tổng Quan</a></li>
          <li className="tab col s4"><a href="#content">Nội dung</a></li>
          <li className="tab col s4"><a href="#feedback">Đánh giá</a></li>
        </ul>
      </div>
      <div id="overview" className="col s12">
        <div className="section">
          <Overview {...overviewData}/>
        </div>
      </div>
      <div id="content" className="col s12">
        <div className="section">
          <Content {...{chapters: chapters}}/>
        </div>
      </div>
      <div id="feedback" className="col s12">
        <div className="section">
          <Feedback {...{course_id}}/>
        </div>
      </div>
    </div>
  )
};


