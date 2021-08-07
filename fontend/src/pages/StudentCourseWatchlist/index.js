import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout/Layout';
import * as actionType from '../../redux/constants/actionTypes';
import RowCourse from '../../components/RowCourse';
import classes from './style.module.scss';

const CourseRegister = () => {
  const stCoureWatchlist = useSelector(state => state.studentCourseWatchlist.data);
  const dispatch = useDispatch();


  useEffect(function () {
    dispatch({
      type: actionType.FETCH_STUDENT_COURSE_REGISTER
    })
  }, [dispatch])

  return (
    <Layout>
      <div className="row">
        <div className="col m10 offset-m1">
          <h5 className={classes.cateHeader}>
            Khóa học yêu thích
            <i className="material-icons">favorite</i>
          </h5>
          <div className="progress">
            <div className="determinate" style={{width: "100%"}} />
          </div>
        </div>        
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            stCoureWatchlist
            &&
            stCoureWatchlist.map(item => {
              return (
                <div className="card">
                  <div className="card-content">
                    <RowCourse data={{ ...item, author: item.fullname }} key={item.id} />
                  </div>
                </div>
              )
            })
          }
          {
            stCoureWatchlist
            && 
            stCoureWatchlist.length === 0
            &&
            <div className={classes.noneData}></div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default CourseRegister;
