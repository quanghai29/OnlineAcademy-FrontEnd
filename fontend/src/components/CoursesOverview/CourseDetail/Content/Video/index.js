import React from "react";
import classes from './style.module.scss';

export default function Video() {
  return (
    <nav className={classes.navnostyle}>
      <div className="nav-wrapper center-align">
        <ul className="left">
          <li><a href="/"><i className={`material-icons ${classes.iconplay}`}>play_circle_filled</i></a></li>
          <li><h6>Giới thiệu sơ lượng về khóa học</h6></li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/a">Xem thử</a></li>
          <li><p>&ensp;</p></li>
          <li><p>05:20</p></li>
        </ul>
      </div>
    </nav>
  )
};


