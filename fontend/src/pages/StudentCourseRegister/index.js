import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout/Layout';
import * as actionType from '../../redux/constants/actionTypes';
import RowCourse from '../../components/RowCourse';
import classes from './style.module.scss';
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_STUDENT} from "../../redux/constants/common";

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
                  <div class={`card-image waves-effect waves-block waves-light ${classes.cardImage}`}>
                      {/* eslint-disable-next-line */}

                      {
                        !item.course_status
                        ?
                        <>
                          <p style={{color: "grey"}}>Đang cập nhật</p>
                          <div className={`progress ${classes.progress}`}>
                            <div className="determinate" style={{width: '0'}} />
                          </div>
                        </>
                        :
                        <>
                          <p style={{fontWeight: "bold"}}>Đã cập nhật đầy đủ</p>
                          <div className={`progress ${classes.progress}`}>
                            <div className="determinate" style={{width: '100%'}} />
                          </div>
                        </>
                      }
                      
                  </div>
                  <div className={`card-content ${classes.cardContent}`}>
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
            <div className={classes.noneData}>
               <h6 className="center">Danh sách rỗng...</h6>
            </div>
          }
        </div>
      </div>
    </Layout>
  );
};

export default WithAuthenticate(CourseRegister, [ROLE_STUDENT]);
