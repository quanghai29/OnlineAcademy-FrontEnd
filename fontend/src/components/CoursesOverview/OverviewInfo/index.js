import React, { useEffect } from "react";
import classes from './style.module.scss';
import { Link } from "react-router-dom";
import currency from "currency.js";
import { useDispatch, useSelector } from "react-redux";
import * as actionType from "../../../redux/constants/actionTypes";
import StarRatings from 'react-star-ratings';
import { DOMAIN_API } from "../../../redux/constants/common";

export default function OverviewInfo(props) {
  const dispatch = useDispatch();
  const favoriteCourse = useSelector(state => state.favoriteCourse.data);
  const registerCourse = useSelector(state => state.registerCourse.data);

  useEffect(function () {
    dispatch({
      type: actionType.FETCH_FAVORITE_COURSE,
      payload: {
        course_id: props.id,
        isFavorite: props.isFavorite
      }
    })

    dispatch({
      type: actionType.FETCH_IS_REGISTER_COURSE,
      payload: {
        course_id: props.id,
        isRegister: props.isRegister
      }
    })
  }, [dispatch, props.isFavorite, props.isRegister, props.id])

  const updateListFavorite = () => {
    dispatch({
      type: actionType.UPDATE_FAVORITE_COURSE,
      payload: {
        course_id: props.id,
        isFavorite: !favoriteCourse.isFavorite
      }
    })
  }

  const RegisterLearning = (course_id) => {
    dispatch({
      type: actionType.FETCH_REGISTER_COURSE,
      payload: {
        course_id
      }
    })
  }

  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>

        <div className="col m6 offset-m1" style={{ marginRight: "25px" }}>
          <div className="row">
            {/* eslint-disable-next-line */}
            <a className={classes.backcouse}>
              <i className="material-icons left">arrow_back</i>
              {props.category_name}
            </a>
          </div>
          <div className="row">
            <h4 style={{ fontWeight: 700 }}>{props.title}</h4>
          </div>
          <div className="row">
            <h6>{props.short_description}</h6>
          </div>
          <div className={`row ${classes.rowStar}`}>
            {
              props.isBestseller
              &&
              <div className={classes.bestseller}>Bestseller</div>
            }
            <h6>{props.num_rating}&ensp;</h6>
            {
              props.num_rating
              &&
              <div style={{paddingTop: "10px"}}>
                 <StarRatings rating={+props.num_rating}
                    starRatedColor="#EC0101"
                    name='rating' starDimension="20px" starSpacing="0"/>
              </div>
             
            }

            <p>&ensp;</p>
            <p>({props.num_feedback} lượt đánh giá)</p>
            <p style={{ color: "#979797" }}> &ensp;|  &ensp;</p>
            <p>{props.num_register} lượt đăng ký</p>
          </div>
          <div className={`row ${classes.createdBy}`}>
            <p>Được tạo bởi &ensp; </p>
            <h5>{props.lecturer_name}</h5>
          </div>

          <div className={`row ${classes.release}`} style={{ display: "flex" }}>
            <i className="material-icons">new_releases</i>
            <p>&ensp;Cập nhật lần cuối vào lúc {props.last_update}</p>
          </div>

          <div className={`row ${classes.watchlist}`}>
            {/*eslint-disable-next-line */}
            <a className="waves-light btn" onClick={updateListFavorite}>
              {
                favoriteCourse.course_id === props.id
                  &&
                  favoriteCourse.isFavorite
                  ? <i className="material-icons right" style={{color: "red"}}>favorite </i>
                  : <i className="material-icons right">favorite_border</i>
              }
              Yêu thích
            </a>
          </div>
        </div>

        <div className="col m4">
          <div className="row">
            <div className="card">

              <div className={`card-image ${classes.playImage}`}>
                <img src={`${DOMAIN_API}/common/media/image/${props.course_img_source}`} 
                    alt={props.course_img_title}
                    onError={(e)=>{e.target.onerror = null; e.target.src="/assets/images/default.jpeg"}}
                />
                {/* eslint-disable-next-line */}
                <a href="#"><i className="material-icons">play_circle_filled</i></a>
              </div>

              <div className={`card-content ${classes.price}`}>
                {
                  props.discount > 0
                  ?
                    <>
                      <h5 style={{textDecoration:"line-through", color: "grey"}}> 
                        {currency(props.price, { separator: ',', symbol: '', precision: 0 }).format()} VND
                      </h5>
                      <h5> 
                        {currency(props.price - props.price * props.discount * 0.01, { separator: ',', symbol: '', precision: 0 }).format()} VND
                      </h5>
                    </>
                  :
                    <>
                      <h5> 
                        {currency(props.price, { separator: ',', symbol: '', precision: 0 }).format()} VND
                      </h5>
                    </>
                }
                {

                  registerCourse.course_id === props.id && registerCourse.isRegister
                    ?
                    <Link to={{
                        pathname: "/learning",
                        state: {
                          course_id: props.id,
                        },
                      }}
                      className="waves-light btn">
                      Vào học
                    </Link>
                    :
                    <button className="waves-light btn" onClick={() => RegisterLearning(props.id)}>Đăng ký ngay</button>
                }
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


