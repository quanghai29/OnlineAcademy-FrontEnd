import React, { useEffect } from "react";
import classes from './style.module.scss';
import Avartar from '../../../../Common/Avartar';
import ReactStars from "react-rating-stars-component";

export default function Comment(props) {

  useEffect(function () {
    
  },[props.vote]);

  return (
    <div className="row" style={{ marginBottom: 0 }}>
      <div className={`card-panel grey lighten-5 z-depth-1 ${classes.cardnostyle}`}>
        <div className="row valign-wrapper">
          <div className="col m1">
            <Avartar {...{nickName: props.fullname}} />
          </div>
          <div className="col m10" style={{ margin: 0 }}>
            <div className="row" style={{ margin: 0 }} >
              <h6 className={classes.darkfontheader}>{props.fullname}</h6>
            </div>
            <div className="row" style={{ margin: 0 }}>

              {
                props.num_rating
                &&
                <ReactStars
                  isHalf={true}
                  activeColor="#EC0101"
                  size={22}
                  value={+props.vote}
                  edit={false}
                />
              }

            </div>
            <div className="row" style={{ margin: 0 }}>
              <p className={classes.darkfonttext}>{props.comment}</p>
            </div>
            <div className="row" style={{ margin: 0 }}>
              <p className={classes.darkfonttext} style={{ color: "#989898" }}>{props.vote_time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


