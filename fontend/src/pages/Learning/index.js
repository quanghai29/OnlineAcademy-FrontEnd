import React, { useEffect } from 'react';
import VideoPlayer from '../../components/VideoPlayer';
import Content from '../../components/CoursesOverview/CourseDetail/Content';
import { useDispatch, useSelector} from 'react-redux';
import * as actionType from '../../redux/constants/actionTypes';

const Learning = ({course_id = 1}) => {
  const courseLearning = useSelector((state) => state.courseLearning.data);
  const {chapters, ...courseInfo} = courseLearning;
  
  const video_source = useSelector((state) => state.videoLearning.data);
  const dispatch = useDispatch();

  useEffect(function() {
    dispatch({
      type: actionType.FETCH_COURSE_LEARNING,
      payload: {
        course_id: course_id
      }
    })

    //handle get video soure --> cần xử lý
    dispatch({
      type: actionType.FETCH_VIDEO_LEARNING,
      payload:{
        video_source: '1.mp4'
      }
    })

  },[dispatch,course_id, video_source])


  return (
    <div className="row" style={{padding: 0, margin: 0}}>
      <div className="row">
        <VideoPlayer {...{...courseInfo, video_source }}/>
      </div>
      <div className="row">
        <Content {...{chapters: chapters}}/>
      </div>
    </div>
   
  );
};

export default Learning;
