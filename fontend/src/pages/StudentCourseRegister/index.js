import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout/Layout';
import * as actionType from '../../redux/constants/actionTypes';
import RowCourse from '../../components/RowCourse';
import classes from './style.module.scss';

const CourseRegister = () => {
  const stCoureRegister = useSelector(state => state.studentCourseRegister.data);
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
            Khóa học đã đăng ký
            <i className="material-icons">class</i>
          </h5>
          <div className="progress">
            <div className="determinate" style={{width: "100%"}} />
          </div>
        </div>        
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            stCoureRegister
            &&
            stCoureRegister.map(item => {
              return (
                <div className="card" key={item.id}>
                  <div className="card-content">
                    <RowCourse 
                      data={{ 
                        ...item, 
                        author: item.fullname, 
                        avg_vote:+item.avg_vote,
                        image: {img_source: item.course_img_source}
                      }} 
                      key={item.id} 
                    />
                  </div>
                </div>
              )
            })
          }
          {
            stCoureRegister
            && 
            stCoureRegister.length === 0
            &&
            <div className={classes.noneData}>Danh sách rỗng</div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default CourseRegister;
