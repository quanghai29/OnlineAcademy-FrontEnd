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

  useEffect(function (){
    window.scrollTo(0, 0); 
  })

  return (
    <Layout>
      <div className="row">
        <div className="col m10 offset-m1">
          <h5 className={classes.cateHeader}>
            {stateLocation && stateLocation.category_name}
            &nbsp;:&nbsp;
            {stateLocation && courseCategory.length} khóa học
          </h5>
          <div className="progress">
            <div className="determinate" style={{width: "100%"}} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            courseCategory
            &&
            courseCategory.map(item => {
              return (
                <div className="card" key={item.id} >
                  <div className="card-content">
                    <RowCourse 
                      data={{ 
                        ...item, 
                        author: item.fullname, 
                        avg_vote:+item.avg_vote,
                        image: {img_source: item.course_img_source}
                      }} 
                    />
                  </div>
                </div>
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
