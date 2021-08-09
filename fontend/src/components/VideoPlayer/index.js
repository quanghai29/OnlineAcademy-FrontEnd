import React, { useEffect, useRef } from "react";
import classes from './VideoPlayer.module.scss';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";
import { DOMAIN_API } from "../../redux/constants/common";
import { useSelector } from "react-redux";
//import { useDispatch, useSelector } from 'react-redux';
//import * as actionVideoLoader from '../../../redux/actions/videoloader';

export default function VideoPlayer(props) {
  // const dispatch = useDispatch();
  // const videoLoader = useSelector((state)=>state.videoLoader);
  const player = useRef();
  const video_source = useSelector((state) => state.videoLearning.data);

  useEffect(() => { }, [video_source]);

  console.log(player)

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
          ref = {player}
          className='react-player'
          url={`${DOMAIN_API}/common/media/load_video/${video_source}`}
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
          
          //onReady = {()=>{player.current.seekTo(5)}}
          onStart = {()=>{player.current.seekTo(5)}}
        />
      </div>

    </div>
  )
};


