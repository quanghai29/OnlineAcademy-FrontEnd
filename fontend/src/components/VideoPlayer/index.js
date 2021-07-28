import React, { useEffect } from "react";
import classes from './VideoPlayer.module.scss';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
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
    url: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
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
          <Link className={classes.backcouse} href="/">
            <i className="material-icons left">arrow_back</i>
            Trang chủ
          </Link>
        </div>

        <div className="col m4 right">
          <a className={classes.namecourse} href="/">
            Phát triển ứng dụng web &nbsp;
            <i className="tiny material-icons">book</i>
          </a>
        </div>

      </div>
      <div className={`row ${classes.videoPlayer}`}>
        <ReactPlayer {...configReactPlayer} />
      </div>

    </div>
  )
};


