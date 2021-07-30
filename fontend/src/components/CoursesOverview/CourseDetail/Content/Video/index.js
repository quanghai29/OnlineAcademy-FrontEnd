import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import classes from './style.module.scss';
import * as actionType from '../../../../../redux/constants/actionTypes';
import M from 'materialize-css/dist/js/materialize.min.js';
import { DOMAIN_API } from "../../../../../redux/constants/common";
import ReactPlayer from "react-player";
import {timeFormart} from '../../../../../utils/helpers';

export default function Video(props) {
  const dispatch = useDispatch();
  const video_source = '1.mp4';

  const playVideo = (isLearning, video_source) => {
    if (isLearning && video_source) {
      dispatch({
        type: actionType.FETCH_VIDEO_LEARNING,
        payload: {
          video_source: video_source
        }
      })
    }
  }

  const configReactPlayer = {
    className: 'react-player',
    url: video_source && `${DOMAIN_API}/common/media/load_video/${video_source}`,
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
    onPlay: () => {
    },
    onPause: () => {
    },
  };

  useEffect(function () {
    initModal();
  })

  const initModal = () => {
    const elems = document.querySelectorAll('.modal');
    //eslint-disable-next-line
    const instances = M.Modal.init(elems, {});
  };

  return (
    <div className="row" style={{ paddingRight: "15px", marginBottom: "0" }}>
      <nav className={classes.navnostyle}>
        <div className="nav-wrapper center-align">
          <ul className="left">
            <li>
              {/* eslint-disable-next-line */}
              <a onClick={() => playVideo(props.isLearning, props.video_source)}>
                <i className={`material-icons ${classes.iconplay}`}>play_circle_filled</i>
              </a>
            </li>
            <li><h6>{props.video_title}</h6></li>
          </ul>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {
              props.isPreview ?
                <li>
                  <button data-target={props.video_id} class="btn modal-trigger">Xem thử</button>
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

            <li><p>&ensp;</p></li>
            <li><p>{timeFormart(props.duration)}</p></li>
          </ul>
        </div>
      </nav>
    </div>

  )
};


