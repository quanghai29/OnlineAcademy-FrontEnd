import React, { useEffect } from "react";
import classes from './CourseDetail.module.scss';
import M from 'materialize-css/dist/js/materialize.min.js';
import Overview from './Overview';
import Content from './Content';

export default function VideoPlayer() {

  useEffect(function () {
    initTabs();
  });

  const initTabs = () => {
    const el = document.getElementById('tabs-swipe-video')
    M.Tabs.init(el, {});
  }

  return (
    <div className="row">
      <div className="col s12" style={{padding:0}}>
        <ul id="tabs-swipe-video" className={`tabs ${classes.containnercommon}`}>
          <li className="tab col s4"><a href="#overview">Tổng Quan</a></li>
          <li className="tab col s4"><a href="#content">Nội dung</a></li>
          <li className="tab col s4"><a href="#test-swipe-3">Đánh giá</a></li>
        </ul>
      </div>
      <div id="overview" className="col s12">
        <div className="section">
          <Overview />
        </div>
      </div>
      <div id="content" className="col s12">
        <div className="section">
          <Content />
        </div>
      </div>
      <div id="test-swipe-3" className="col s12 green">Test 3</div>
    </div>
  )
};


