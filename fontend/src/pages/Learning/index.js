import React, { useEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Content from '../../components/CoursesOverview/CourseDetail/Content';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from '../../redux/constants/actionTypes';
import { useLocation } from 'react-router-dom';

const Learning = () => {
  const courseLearning = useSelector((state) => state.courseLearning.data);
  const location = useLocation();
  const stateLocation = location.state;
  const { chapters, ...courseInfo } = courseLearning;

  const dispatch = useDispatch();

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

  if(stateLocation && stateLocation.course_id > 0){
    getVideoLearning();
  }
  

  function getVideoLearning() {
    if (courseInfo.video_source_learning) {
      dispatch({
        type: actionType.FETCH_VIDEO_LEARNING,
        payload: {
          video_source: courseInfo.video_source_learning,
          video_id: courseInfo.video_id_learning,
        }
      })
    }
  }

  return (
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

export default Learning;
