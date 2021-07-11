import React from "react";
import classes from './VideoPlayer.module.scss';

export default function VideoPlayer() {

  return (
    <div className={`row ${classes.noplacearound}`}>
      <div className={`card ${classes.layoutvideo}`}>
        <div className="card-content white-text">
          <div className="row">
            <h6>Phát triển ứng dụng web</h6>
          </div>
        </div>
      </div>
    </div>
  )
};


