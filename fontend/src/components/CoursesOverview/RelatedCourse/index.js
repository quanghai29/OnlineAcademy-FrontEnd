import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionType from '../../../redux/constants/actionTypes';
import RowCourse from '../../../components/RowCourse';

const RelatedCourse = (props) => {
  const relatedCourse = useSelector(state => state.relatedCourse);
  const [isLoading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(function () {
    if (props.category_id > 0) {
      dispatch({
        type: actionType.FETCH_RELATED_COURSE,
        payload: {
          category_id: props.category_id,
        }
      })
    }
  }, [dispatch, props])

  useEffect(function () {
    if (!relatedCourse.isLoading) {
      setLoading(false);
    }
  }, [relatedCourse.isLoading])

  return (
    <div className="row">
      <div className="row">
        <div className="col m10 offset-m1">
          <Link to="/" class="waves-light btn">
            <i class="material-icons right">arrow_forward</i>
            Khám phá thêm
          </Link>
          {
            isLoading
              ?
              <div className="progress">
                <div className="indeterminate" />
              </div>
              :
              <div className="progress">
                <div className="determinate" style={{ width: "100%" }} />
              </div>
          }
        </div>
      </div>
      <div className="row">
        <div className="col m10 offset-m1">
          {
            !isLoading
            &&
            relatedCourse.data.length > 0
            &&
            relatedCourse.data.map(item => {
              return (
                <div className="card">
                  <div className="card-content">
                    <RowCourse data={{ ...item, author: item.fullname, avg_vote: +item.avg_vote }} key={item.id} />
                  </div>
                </div>
              )
            })
          }

          {
            !isLoading
            &&
            !relatedCourse.hasError
            &&
            relatedCourse.data.length === 0
            &&
            <div >
              <h5 className="center-align blue-text text-darken-2" style={{fontWeight:"bold !important"}}>Chưa có dữ liệu</h5>
            </div>
          }

          {
            !isLoading
            &&
            relatedCourse.hasError
            &&
            <div >
              <h5 className="center-align blue-text text-darken-2" style={{fontWeight:"bold !important"}}>Đã có lỗi xảy ra</h5>
            </div>
          } 
        </div>
      </div>
    </div>
  );
};

export default RelatedCourse;
