import React from "react";
import classes from './VideoPlayer.module.scss';
import ReactPlayer from 'react-player';

export default function VideoPlayer() {
  const configReactPlayer = {
    className : 'react-player',
    url :'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    width : '100%',
    height: '100%'
  };
  return (
    <div className={classes.playerwrapper}>
      <ReactPlayer {... configReactPlayer} />
    </div>
  )
};


