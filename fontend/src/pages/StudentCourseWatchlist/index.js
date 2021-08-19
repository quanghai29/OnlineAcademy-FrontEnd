import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../../layout/Layout';
import * as actionType from '../../redux/constants/actionTypes';
import RowCourse from '../../components/RowCourse';
import classes from './style.module.scss';
import WithAuthenticate from "../../components/HOCs/withAuthenticate";
import {ROLE_STUDENT} from "../../redux/constants/common";

const CourseWatchlist = () => {
  const stCoureWatchlist = useSelector(state => state.studentCourseWatchlist.data);
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_STUDENT_COURSE_WATCHLIST
    })
  }, [dispatch])

  const updateListFavorite = (course_id) => {
    dispatch({
      type: actionType.UPDATE_FAVORITE_COURSE,
      payload: {
        course_id: course_id,
        isFavorite: false
      }
    })
  }
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
                <div className="card" key={item.id}>
                  <div className={`card-content ${classes.cardContent}`}>
                    <span class="card-title right">
                      {/* eslint-disable-next-line */}
                      <a class="waves-teal btn-flat" onClick={ () => updateListFavorite(item.id)}><i class="large material-icons">close</i></a>
                    </span>
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
            stCoureWatchlist
            && 
            stCoureWatchlist.length === 0
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
export default WithAuthenticate(CourseWatchlist, [ROLE_STUDENT]);