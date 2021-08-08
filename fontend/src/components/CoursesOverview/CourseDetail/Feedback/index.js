import React, { useEffect, useState } from "react";
import classes from './style.module.scss';
import Comment from './Comment';
import { useDispatch, useSelector } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js';
import * as actionType from '../../../../redux/constants/actionTypes';
import StarRatings from 'react-star-ratings';

export default function Feedback(props) {
  const comments = useSelector(state => state.courseComments);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();  

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_COURSE_COMMENT,
      payload: {
        course_id: props.course_id,
        isFeedbacked: props.isFeedbacked,
      }
    })

    const elems = document.getElementById('commentModal');
    M.Modal.init(elems, {});
  }, [dispatch, props])

  const updateComment = () => {
    const newRating = rating;
    const newComment = document.getElementById("comment").value;
    if (newRating === 0) {
      alert('vui lòng đánh giá độ hài lòng');
      return;
    }

    dispatch({
      type: actionType.FETCH_UPDATE_COURSE_COMMENT,
      payload: {
        course_id: props.course_id,
        newRating,
        newComment,
      }
    })
  }

  return (
    <div className={`row ${classes.feedback}`}>
      {/* Modal Structure */}
      <div id="commentModal" className={`modal ${classes.styleModal}`}>
        <div className="modal-content">

          <div className="row">

            <div className="col m12">

              <div className="row">
                <h5>Vui lòng đánh giá</h5>
                <div style={{ paddingTop: "10px" }}>
                    <StarRatings
                      rating={rating > 0 ? rating: +comments.student_comment.vote || 0 }
                      starRatedColor="#EC0101"
                      name='rating'
                      starDimension="45px"
                      starSpacing="0"
                      isSelectable={true}
                      changeRating={(newValue) => { setRating(newValue) }}
                    />
                  </div>
              </div>

              <div className="row">
                <h5>Nội dung đánh giá</h5>
                <div className="input-field col m12">
                  <textarea id="comment"
                    className="materialize-textarea"
                    defaultValue={comments.student_comment.comment || ''}
                  >
                  </textarea>
                </div>
              </div>

              <div className="row">
                <button className="right waves-light btn" onClick={updateComment}>
                  <i className="material-icons left">send</i>
                  Gửi đánh giá
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="col m10 offset-m1">
        <div className="row">
          {
            props.isFeedbacked
              ? <button data-target="commentModal" className="right waves-light btn modal-trigger">
                <i className="material-icons left">edit</i>
                Chỉnh sửa đánh giá
              </button>
              : props.isRegister
              &&
              <button data-target="commentModal" className="right waves-light btn modal-trigger">
                <i className="material-icons left">insert_comment</i>Viết đánh giá
              </button>
          }
        </div>
        <div className="row">
          <div className="card">
            <div className="card-content dark-text" style={{ padding: "1px 12px" }}>
              {
                comments.data
                &&
                comments.data.map(comment => <Comment key={comment.id} {...comment} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


