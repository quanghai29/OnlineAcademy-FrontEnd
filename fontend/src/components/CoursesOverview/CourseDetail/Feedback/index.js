import React, { useEffect, useState } from "react";
import classes from './style.module.scss';
import Comment from './Comment';
import { useDispatch, useSelector } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js';
import * as actionType from '../../../../redux/constants/actionTypes';
import ReactStars from "react-rating-stars-component";

export default function Feedback(props) {
  const comments = useSelector(state => state.courseComments.data);
  const [rating, setRating] = useState(0);
  const [contentComment, setComment] = useState('');
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_COURSE_COMMENT,
      payload: {
        course_id: props.course_id
      }
    })
    initModal();
    initInputComment();

    // eslint-disable-next-line
  }, [dispatch, props])

  const initInputComment = () => {
    if (props.isFeedbacked) {
      //làm tạm payload để test
      // localStorage.setItem('decodePayload', JSON.stringify({
      //   userId: 1,
      //   role: 3
      // }))

      //lấy userid
      const decodePayload = localStorage.getItem('decodePayload');
      
      if(decodePayload === null)
        return
      const userId = JSON.parse(decodePayload).userId;

      //tìm thông tin feedback của user
      const studentComment = comments
        .find(comment => comment.course_id === props.course_id
          && comment.student_id === userId);

      //set lại state
      if(studentComment){
        setRating(studentComment.vote);
        setComment(studentComment.comment);
      }
    }
  }
  const initModal = () => {
    const elems = document.querySelectorAll('.modal');
    //eslint-disable-next-line
    const instances = M.Modal.init(elems, {});
  }

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
      {
        props.isRegister
        &&
        <div id="commentModal" className={`modal ${classes.styleModal}`}>
          <div className="modal-content">

            <div className="row">

              <div className="col m12">

                <div className="row">
                  <h5>Vui lòng đánh giá</h5>
                  {
                    comments.length >= 0
                    &&
                    <ReactStars
                      key={rating}
                      count={5}
                      activeColor="#EC0101"
                      size={45}
                      onChange={(newValue) => { setRating(newValue) }}
                      value={rating}
                    />
                  }
                </div>

                <div className="row">
                  <h5>Nội dung đánh giá</h5>
                  <div className="input-field col m12">
                    <textarea id="comment"
                      className="materialize-textarea"
                      defaultValue={contentComment}
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
      }
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
                comments
                &&
                comments.map(comment => <Comment key={comment.id} {...comment} />)
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


