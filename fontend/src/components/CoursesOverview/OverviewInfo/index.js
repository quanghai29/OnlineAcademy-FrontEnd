import React, { useEffect } from "react";
import classes from './style.module.scss';
import ReactStars from "react-rating-stars-component";
import {Link} from  "react-router-dom";
import currency from "currency.js";

export default function OverviewInfo(props) {
  useEffect(function (){

  },[props.num_rating])

  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>

        <div className="col m6 offset-m1" style={{marginRight: "25px"}}>
          <div className="row">
            <Link className={classes.backcouse} to="/">
              <i className="material-icons left">arrow_back</i>
              {props.category_name}
            </Link>
          </div>
          <div className="row">
            <h4 style={{ fontWeight: 700 }}>{props.title}</h4>
          </div>
          <div className="row">
            <h6>{props.short_description}</h6>
          </div>
          <div className={`row ${classes.rowStar}`}>
            <div className={classes.bestseller}>Bestseller</div>
            <h6>{props.num_rating}&ensp;</h6>

            {
            props.num_rating
            &&
            <ReactStars
              isHalf = {true}
              activeColor = "#EC0101"
              size = {25}
              value = {+props.num_rating}
              edit = {false}
            />
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
            { /* eslint-disable-next-line */}
            <a className="waves-effect waves-light btn">
              <i className="material-icons right">favorite_border</i>
              Yêu thích
            </a>
          </div>
        </div>

        <div className="col m4">
          <div className="row">
            <div className={`card ${classes.courseplay}`}>

              <div className={`card-image ${classes.playImage}`}>
                <img src="assets/images/home/girlBg.png" alt="ảnh"/>
                <a href="/"><i className="material-icons">play_circle_filled</i></a>
              </div>

              <div className={`card-content ${classes.price}`}>
                <h5> {currency(props.price, { separator: ',' , symbol:'', precision: 0}).format()} VND</h5>
                { /* eslint-disable-next-line */}
                <a className="waves-effect waves-light btn">Đăng ký ngay</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


