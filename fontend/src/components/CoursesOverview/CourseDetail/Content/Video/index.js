import React from "react";
import classes from './style.module.scss';

export default function Video(props) {
  return (
    <div className="row" style={{paddingRight: "15px",marginBottom: "0"}}>
      <nav className={classes.navnostyle}>
        <div className="nav-wrapper center-align">
          <ul className="left">
            <li><a href="/"><i className={`material-icons ${classes.iconplay}`}>play_circle_filled</i></a></li>
            <li><h6>{props.video_title}</h6></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {
              props.isPreview ? 
                <li><a href="/a">Xem thử</a></li> 
                : <li><p>&ensp;</p></li>
            }
            <li><p>&ensp;</p></li>
            <li><p>{props.duration} giây</p></li>
          </ul>
        </div>
      </nav>
    </div>

  )
};


