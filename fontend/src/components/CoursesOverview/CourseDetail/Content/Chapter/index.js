import React from "react";
import classes from './style.module.scss';
import {timeFormart} from '../../../../../utils/helpers';

export default function Chapter(props) {
  return (
    <nav className={classes.navnostyle}>
      <div className="nav-wrapper center-align">
        <ul className="left">
          <li><i className="material-icons ex">expand_more</i></li>
          <li><h6>{props.chapter_title}</h6></li>
        </ul>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><p>{props.sum_video_chapter} bài học</p></li>
          <li><p>&#8728;</p></li>
          <li><p>{ timeFormart(props.sum_duration_chapter)}</p></li>
        </ul>
      </div>
    </nav>
  )
};


