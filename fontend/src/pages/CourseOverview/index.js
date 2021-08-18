import React, { useEffect, useState } from 'react';
import Layout from '../../layout/Layout';
import OverviewInfo from '../../components/CoursesOverview/OverviewInfo';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';
import { useDispatch, useSelector} from 'react-redux';
import * as actionType from '../../redux/constants/actionTypes';
import { useLocation } from 'react-router-dom';
import RelatedCourse from '../../components/CoursesOverview/RelatedCourse';
import PreLoading from '../../components/PreLoading';
import Swal from 'sweetalert2';
import classes from './style.module.scss';

const CourseOverview = () => {
  const courseOverview = useSelector((state) => state.courseOverview);
  const {chapters, ...overviewData} = courseOverview.data;
  const location = useLocation();
  const stateLocation = location.state;
  const dispatch = useDispatch();
  
  const [isLoading, setLoading] = useState(true);

  useEffect(function(){
    dispatch({
      type: actionType.RESET_COURSE_OVERVIEW,
    })
    setLoading(true);
  },[location, dispatch])

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

  useEffect(function (){
    window.scrollTo(0, 0); 
  })

  useEffect(function(){
    if(!courseOverview.isLoading){
      setLoading(false);
    }
  },[isLoading, courseOverview.isLoading])

  useEffect(function(){
    if(!isLoading){
      dispatch({
        type: actionType.UPDATE_VIEWS_COURSE,
        payload:{
          course_id: stateLocation.course_id
        }
      })
    }
  },[isLoading, dispatch, stateLocation])


  return (
    isLoading
    ? 
      <div>
        <div className={classes.loading}>
          <PreLoading/>
        </div>
        <div>
          <Layout>
            <div className={classes.noneData}></div>
          </Layout>
        </div>
      </div>
    :
    courseOverview.isError
    ?
    <Layout>
      {
        Swal.fire({
          title: "Some things is Error",
          icon: "error"
        })
      }
    </Layout>
    :
    <Layout>
      <OverviewInfo {...overviewData}/>
      <CourseDetail {...{chapters, overviewData, course_id: overviewData.id }}/>
      <RelatedCourse {...{
        category_id: overviewData.category_id,
        category_name: overviewData.category_name,
        course_id: overviewData.id
      }}/>
    </Layout>
  );
};

export default CourseOverview;
