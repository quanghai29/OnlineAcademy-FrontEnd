import React, { useEffect } from 'react';
import Layout from '../../layout/Layout';
//import VideoPlayer from '../../components/CoursesOverview/VideoPlayer';
import OverviewInfo from '../../components/CoursesOverview/OverviewInfo';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';
import { useDispatch, useSelector} from 'react-redux';
import * as actionType from '../../redux/constants/actionTypes';

const CourseOverview = ({course_id}) => {
  const courseOverview = useSelector((state) => state.courseOverview);
  const {chapters, ...overviewData} = courseOverview.data;
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_COURSE_OVERVIEW,
      payload: {
        course_id: course_id
      }
    })
  },[dispatch,course_id]);

  return (
    <Layout>
      <OverviewInfo {...overviewData}/>
      <CourseDetail {...{chapters, overviewData, course_id}}/>
    </Layout>
  );
};

export default CourseOverview;
