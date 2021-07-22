import React, { useEffect } from "react";
import classes from './VideoPlayer.module.scss';
import ReactPlayer from 'react-player';
//import { useDispatch, useSelector } from 'react-redux';
//import * as actionVideoLoader from '../../../redux/actions/videoloader';

export default function VideoPlayer() {
  // const dispatch = useDispatch();
  // const videoLoader = useSelector((state)=>state.videoLoader);
  
  // useEffect(() => {
  //   dispatch(actionVideoLoader.fetchloadvideo());
  // }, [dispatch, videoLoader]);

  const configReactPlayer = {
    className: 'react-player',
    url: '',
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

  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>

        <div className="col m4">
          <a className={classes.backcouse} href="/">
            <i className="material-icons left">arrow_back</i>
            Khóa học
          </a>
        </div>

        <div className="col m4 right">
          <a className={classes.namecourse} href="/">
            Phát triển ứng dụng web &nbsp;
            <i className="tiny material-icons">book</i>
          </a>
        </div>

      </div>
      <div className="row" style={{ height: "100%", marginBottom: "0px" }}>
        <div className="col m10 offset-m1">
          <ReactPlayer {...configReactPlayer} />
        </div>
      </div>

    </div>
  )
};


