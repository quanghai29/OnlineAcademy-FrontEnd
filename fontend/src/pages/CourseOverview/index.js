import React, { useEffect } from 'react';
import Layout from '../../layout/Layout';
import OverviewInfo from '../../components/CoursesOverview/OverviewInfo';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';
import { useDispatch, useSelector} from 'react-redux';
import * as actionType from '../../redux/constants/actionTypes';
import { useLocation } from 'react-router-dom';

const CourseOverview = () => {
  const courseOverview = useSelector((state) => state.courseOverview);
  const {chapters, ...overviewData} = courseOverview.data;
  const location = useLocation();
  const stateLocation = location.state;
  const dispatch = useDispatch();

  useEffect(function () {
    if(stateLocation && stateLocation.course_id > 0){
      dispatch({
        type: actionType.FETCH_COURSE_OVERVIEW,
        payload: {
          course_id: stateLocation.course_id
        }
      })
    }
  },[dispatch,stateLocation]);

  return (
    <Layout>
      <OverviewInfo {...overviewData}/>
      <CourseDetail {...{chapters, overviewData, course_id: overviewData.id }}/>
    </Layout>
  );
};

export default CourseOverview;
