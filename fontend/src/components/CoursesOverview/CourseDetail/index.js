import React, { useEffect } from "react";
import classes from './CourseDetail.module.scss';
import M from 'materialize-css/dist/js/materialize.min.js';
import Overview from './Overview';

export default function VideoPlayer() {

  useEffect(function () {
    initTabs();
  });

  const initTabs = () => {
    const el = document.getElementById('tabs-swipe-video')
    M.Tabs.init(el, { duration: 2000 });
  }

  return (
    <div className="row">
      <div classname="col s12">
        <ul id="tabs-swipe-video" className={`tabs ${classes.containnercommon}`}>
          <li className="tab col s4"><a href="#overview">Tổng Quan</a></li>
          <li className="tab col s4"><a href="#test-swipe-2">Nội dung</a></li>
          <li className="tab col s4"><a href="#test-swipe-3">Đánh giá</a></li>
        </ul>
      </div>
      <div id="overview" className="col s12">
        <Overview/>
      </div>
      <div id="test-swipe-2" className="col s12 red">Test 2</div>
      <div id="test-swipe-3" className="col s12 green">Test 3</div>
    </div>
  )
};


