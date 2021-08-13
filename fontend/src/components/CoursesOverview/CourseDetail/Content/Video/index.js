import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import classes from './style.module.scss';
import * as actionType from '../../../../../redux/constants/actionTypes';
import M from 'materialize-css/dist/js/materialize.min.js';
import { DOMAIN_API } from "../../../../../redux/constants/common";
import ReactPlayer from "react-player";
import { timeFormart } from '../../../../../utils/helpers';

export default function Video(props) {
  const dispatch = useDispatch();
  const [percent, setPercent] = useState(0);

  const playVideo = () => {
    if (props.isLearning && props.video_source) {
      dispatch({
        type: actionType.FETCH_VIDEO_LEARNING,
        payload: {
          video_source: props.video_source,
          video_id: props.video_id
        }
      })
      window.scrollTo(0, 0); 
    }
  }
  
  useEffect(function () {
    if (props.status_completed === 1) {
      setPercent(100);
    } else if (props.status_completed === 0) {
      const percent = (props.current_time / props.duration) * 100;
      setPercent(percent.toFixed(0))
    }
  }, [props])

  useEffect(function () {
    initModal();
  })

  const initModal = () => {
    const elems = document.querySelectorAll('.modal');
    //eslint-disable-next-line
    const instances = M.Modal.init(elems, {});
  };

  let configReactPlayer = {
    className: 'react-player',
    url: `${DOMAIN_API}/common/media/load_video/${props.video_source}`,
    width: "100%",
    height: "100%",
    controls: true,
    pip: true,
    config: {
      file: {
        attributes: {
          controlsList: 'nodownload'  //<- this is the important bit
        }
      }
    },
  };

  return (
    <div className="row" style={{ paddingRight: "15px", marginBottom: "0" }}>
      <nav className={classes.navnostyle}>
        <div className="nav-wrapper center-align">
          <ul className="left">
            <li>
              {/* eslint-disable-next-line */}
              <a onClick={() => playVideo()}>
                <i className={`material-icons ${classes.iconplay}`}>play_circle_filled</i>
              </a>
            </li>
            <li>

              <h6>{props.video_title}</h6>
            </li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {
              props.isPreview ?
                <li>
                  <button data-target={props.video_id} className="btn modal-trigger">Xem thử</button>
                </li>
                : <li><p>&ensp;</p></li>
            }

            {/* Modal Structure */}
            {
              props.isPreview
              &&
              <div id={props.video_id} className={`modal ${classes.styleModal}`}>
                <div className="modal-content">
                  <ReactPlayer {...configReactPlayer} />
                </div>
              </div>
            }

            {
                props.isLearning
                &&
                <li>
                  <h6>{percent}%&ensp;</h6>
                </li>
            }

            {
              props.isLearning
              &&
              <li>
                <div className={`progress ${classes.progress}`} >
                  <div className="determinate" style={{ width: `${percent}%` }} />
                </div>
              </li>
            }
            <li><p>&ensp;</p></li>
            <li><p>{timeFormart(props.duration)}</p></li>
          </ul>
        </div>
      </nav>
    </div>

  )
};


