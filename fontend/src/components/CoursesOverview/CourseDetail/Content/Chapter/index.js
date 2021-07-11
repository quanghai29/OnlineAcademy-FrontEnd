import React from "react";
import classes from './style.module.scss';

export default function Chapter() {
  return (
    <nav className={classes.navnostyle}>
      <div className="nav-wrapper center-align">
        <ul className="left">
          <li><i className="material-icons ex">expand_more</i></li>
          <li><h6>Welcome</h6></li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><p>5 bài học</p></li>
          <li><p>&#8728;</p></li>
          <li><p>5 giờ: 20 phút</p></li>
        </ul>
      </div>
    </nav>
  )
};


