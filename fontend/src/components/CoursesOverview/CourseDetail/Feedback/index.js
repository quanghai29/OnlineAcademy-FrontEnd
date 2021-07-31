import React, { useEffect, useState } from "react";
import classes from './style.module.scss';
import Comment from './Comment';
import { useDispatch, useSelector } from "react-redux";
import M from 'materialize-css/dist/js/materialize.min.js';
import * as actionType from '../../../../redux/constants/actionTypes';
import ReactStars from "react-rating-stars-component";

export default function Feedback(props) {
  const comments = useSelector(state => state.courseComments.data);

  const [rating,setRating] = useState(0);
  const dispatch = useDispatch();

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_COURSE_COMMENT,
      payload: {
        course_id: props.course_id
      }
    })
    initModal();
  }, [dispatch, props])

  const initModal = () => {
    const elems = document.querySelectorAll('.modal');
    //eslint-disable-next-line
    const instances = M.Modal.init(elems, {});
  };

  const updateComment = ()=>{
    const newRating = rating;
    const newComment = document.getElementById("comment").value;
    if(newRating === 0){
      alert('vui lòng đánh giá độ hài lòng');
      return;
    }
    
    dispatch({
      type: actionType.FETCH_UPDATE_COURSE_COMMENT,
      payload:{
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
                  <ReactStars
                    count={5}
                    activeColor="#EC0101"
                    size={45}
                    onChange ={(newValue)=>{setRating(newValue)}}
                  />
                </div>

                <div className="row">
                  <h5>Nội dung đánh giá</h5>
                  <div className="input-field col m12">
                    <textarea id="comment" className="materialize-textarea"></textarea>
                    <label htmlFor="comment">10 - 200 kí tự</label>
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
              ? <button className="right waves-light btn">
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


