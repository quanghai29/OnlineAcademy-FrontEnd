import React, { useEffect } from "react";
import classes from './style.module.scss';
import Comment from './Comment';
import { useDispatch, useSelector } from "react-redux";
import * as actionType from '../../../../redux/constants/actionTypes';

export default function Feedback({course_id}) {
  const comments = useSelector(state => state.courseComments.data);
  const dispatch = useDispatch();

  useEffect(function(){
    dispatch({
      type: actionType.FETCH_COURSE_COMMENT,
      payload: {
        course_id: course_id
      }
    })
  },[dispatch,course_id])

  return (
    <div className="row">
      <div className="col m10 offset-m1">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text" style={{ padding: "1px 12px" }}>

            {
              comments
              &&
              comments.map(comment=> <Comment key={comment.id} {...comment}/>)
            }
            
          </div>
        </div>
      </div>
    </div>
  )
};


