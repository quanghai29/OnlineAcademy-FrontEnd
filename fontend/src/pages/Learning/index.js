import React, { useEffect, useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Content from '../../components/CoursesOverview/CourseDetail/Content';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from '../../redux/constants/actionTypes';
import { useLocation } from 'react-router-dom';
import PreLoading from '../../components/PreLoading';
import classes from './style.module.scss';
import Swal from 'sweetalert2';
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_STUDENT} from "../../redux/constants/common";

const Learning = () => {
  const courseLearning = useSelector((state) => state.courseLearning);
  const location = useLocation();
  const stateLocation = location.state;
  const { chapters, ...courseInfo } = courseLearning.data;

  const dispatch = useDispatch();
  const [isLoading , setLoading] = useState(true);

  useEffect(function () {
    if (stateLocation && stateLocation.course_id > 0) {
      dispatch({
        type: actionType.FETCH_COURSE_LEARNING,
        payload: {
          course_id: stateLocation.course_id
        }
      })
    }
  }, [dispatch,stateLocation])

  useEffect(function(){
    if (!isLoading && courseInfo.video_source_learning) {
      dispatch({
        type: actionType.FETCH_VIDEO_LEARNING,
        payload: {
          video_source: courseInfo.video_source_learning,
          video_id: courseInfo.video_id_learning,
        }
      })
      window.scrollTo(0, 0); 
    }
  },[dispatch, courseInfo, isLoading ]);

  useEffect(function(){
    if(!courseLearning.isLoading){
      setLoading(false);
    }
  },[isLoading, courseLearning.isLoading])

  return (
    isLoading
    ? 
      <div className={classes.loading}>
        <PreLoading/>
      </div>
    :
    courseLearning.isError
    ?
    Swal.fire({
      title: courseLearning.error_message,
      icon: "error"
    })
    :
    <div className="row" style={{ padding: 0, margin: 0 }}>
      <div className="row">
        <VideoPlayer {...courseInfo} />
      </div>
      <div className="row">
        <Content {...{ chapters: chapters }} />
      </div>
    </div>
  );
};

export default WithAuthenticate(Learning, [ROLE_STUDENT]);
