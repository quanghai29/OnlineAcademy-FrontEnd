import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Layout from '../../layout/Layout';
import * as actionType from '../../redux/constants/actionTypes';
import RowCourse from '../../components/RowCourse';
import classes from './style.module.scss';

const CourseCategory = () => {
  const location = useLocation();
  const stateLocation = location.state;
  const courseCategory = useSelector(state => state.courseCategory.data);
  const dispatch = useDispatch();

  useEffect(function () {
    if (stateLocation && stateLocation.category_id > 0) {
      dispatch({
        type: actionType.FETCH_COURSE_OF_CATEGORY,
        payload: {
          category_id: stateLocation.category_id
        }
      })
    }
  }, [dispatch, stateLocation])

  return (
    <Layout>
      <div className="row">
        <div className="col m10 offset-m1">
          <h5 className={classes.cateHeader}>
            {stateLocation && stateLocation.category_name}
            &nbsp;:&nbsp;  
            {stateLocation && stateLocation.amount_course} khóa học
          </h5>
        </div>        
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            courseCategory
            &&
            courseCategory.map(item => {
              return (
                <RowCourse data={{ ...item, author: item.fullname }} key={item.id} />
              )
            })
          }
          {
            courseCategory
            && 
            courseCategory.length === 0
            &&
            <div className={classes.noneData}></div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default CourseCategory;
