import React, { useEffect, useRef, useState } from "react";
import classes from './VideoPlayer.module.scss';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import { DOMAIN_API } from "../../redux/constants/common";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from '../../redux/constants/actionTypes';
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_STUDENT} from "../../redux/constants/common";

const VideoPlayer = (props) => {
  const player = useRef();
  const [loadedVideo, setLoadedVideo ] = useState(false);
  const [source, setSource] = useState(null);
  const [video_id, setVideoid] = useState(0);
  const [current_time, setCurrentTime] = useState(0);
  const [status_completed, setStatus] = useState(0);

  const videoLearning = useSelector((state) => state.videoLearning);
  const dispatch = useDispatch();

  useEffect(() => { 
    if(loadedVideo){
      player.current.seekTo(current_time);
    }
  }, [loadedVideo, current_time]);

  useEffect(() => { 
    if(videoLearning.isChangeSource){
      const current_time = player.current.getCurrentTime();
      let current_status = status_completed;

      if(!current_status){
        const duration = player.current.getDuration();
        current_status = duration === current_time;
      }

      //update state current video before change source
      dispatch({
        type: actionType.FETCH_UPDATE_STATE_STUDENT_VIDEO,
        payload:{
          video_id: +video_id,
          current_time,
          status_completed : current_status
        }
      })

      //update source
      setSource(videoLearning.data.video_source);
      setVideoid(videoLearning.data.video_id);
      setCurrentTime(videoLearning.data.current_time);
      setStatus(videoLearning.data.status_completed);
    }

  // eslint-disable-next-line
  }, [videoLearning]);

  //console.log(videoLearning);
  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>

        <div className="col m4">
          <Link className={classes.backcouse} to="/">
            <i className="material-icons left">arrow_back</i>
            Trang chủ
          </Link>
        </div>

        <div className="col m4 right">
          {/* eslint-disable-next-line */}
          <Link className={classes.namecourse} to="/">
            {props.title} &nbsp;
            <i className="tiny material-icons">book</i>
          </Link>
        </div>

      </div>
      <div className={`row ${classes.videoPlayer}`}>
        <ReactPlayer
          //key = {video_id}
          ref = {player}
          className='react-player'
          url={`${DOMAIN_API}/common/media/load_video/${source}`}
          width="100%"
          height="100%"
          controls={true}
          pip={true}
          config = {{
              file : {
                attributes: {
                  controlsList: 'nodownload'  //<- this is the important bit
                }
              }
          }}
          onReady = {() => {setLoadedVideo(true)}}
          onError = {(err)=>{console.log(err)}}
        />
      </div>

    </div>
  )
};

export default WithAuthenticate(VideoPlayer, [ROLE_STUDENT]);

