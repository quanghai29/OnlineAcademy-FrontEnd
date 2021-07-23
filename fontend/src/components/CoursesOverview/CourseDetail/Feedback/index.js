import React from "react";
import classes from './style.module.scss';
import ReactStars from "react-rating-stars-component";
import Comment from './Comment';

export default function Feedback({course_id}) {
  //console.log(course_id);
  const configBigReactStars ={
    isHalf: true,
    activeColor: "#EC0101",
    size: 60,
    value: 4.7,
    edit: false
  };

  return (
    <div className="row">
      <div className="col m10 offset-m1">
        <div className={`card ${classes.mycard}`}>
          <div className="card-content dark-text" style={{ padding: "1px 12px" }}>

            <div className="row" style={{marginBottom: 0}}>
              <div className="col m10 offset-m1">
                <nav className={classes.starnav}>
                  <div className="nav-wrapper center-align">
                    <ul className="left">
                      <li><h3 className={classes.staravg}>4.5</h3></li>
                      <li><ReactStars {... configBigReactStars}/></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="row">
              <div className="col offset-m1" style= {{paddingLeft: "22px"}}>
                <div className ="row">
                  <h3 className={classes.commenthead}>550</h3>
                  <h3 className={classes.commenthead}>Nhận xét</h3>
                  <i className="material-icons">feedback</i>
                </div> 
              </div>
            </div>

            <Comment/>
          </div>
        </div>
      </div>
    </div>
  )
};


