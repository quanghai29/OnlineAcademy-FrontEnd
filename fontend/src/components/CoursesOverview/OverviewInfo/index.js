import React from "react";
import classes from './style.module.scss';
import ReactStars from "react-rating-stars-component";

export default function OverviewInfo() {
  const configBigReactStars = {
    isHalf: true,
    activeColor: "#EC0101",
    size: 25,
    value: 5.0,
    edit: false
  };

  return (
    <div className={classes.playerwrapper}>
      {/* Header video */}
      <div className={`row ${classes.controlheader}`}>

        <div className="col m6 offset-m1" style={{marginRight: "25px"}}>
          <div className="row">
            <a className={classes.backcouse} href="/">
              <i className="material-icons left">arrow_back</i>
              Lập trình web
            </a>
          </div>
          <div className="row">
            <h4 style={{ fontWeight: 700 }}>Khóa học javascript cho người mới bắt đầu</h4>
          </div>
          <div className="row">
            <h6>Khóa học dành cho người mới, người chưa biết gì về code, người muốn ôn tập lại kiến thức</h6>
          </div>
          <div className={`row ${classes.rowStar}`}>
            <div className={classes.bestseller}>Bestseller</div>
            <h6>5.0&ensp;</h6>
            <ReactStars {...configBigReactStars} />
            <p>&ensp;</p>
            <p>(5 lượt đánh giá)</p>
            <p style={{ color: "#979797" }}> &ensp;|  &ensp;</p>
            <p>2 lượt đăng ký</p>
          </div>
          <div className={`row ${classes.createdBy}`}>
            <p>Được tạo bởi &ensp; </p>
            <h5>Quang Hải</h5>
          </div>

          <div className={`row ${classes.release}`} style={{ display: "flex" }}>
            <i class="material-icons">new_releases</i>
            <p>&ensp;Cập nhật lần cuối vào lúc 03/2021</p>
          </div>

          <div className={`row ${classes.watchlist}`}>
            { /* eslint-disable-next-line */}
            <a className="waves-effect waves-light btn"><i class="material-icons right">favorite_border</i>Yêu thích</a>
          </div>
        </div>

        <div className="col m4">
          <div className="row">
            <div className={`card ${classes.courseplay}`}>

              <div className={`card-image ${classes.playImage}`}>
                <img src="assets/images/home/girlBg.png" alt="ảnh"/>
                <a href="/"><i class="material-icons">play_circle_filled</i></a>
              </div>

              <div className={`card-content ${classes.price}`}>
                <h5>599.999 VND</h5>
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


