import React from "react";
import classes from './style.module.scss';
import Avartar from '../../../../Common/Avartar';
import ReactStars from "react-rating-stars-component";

export default function Comment() {
  const configReactStars = {
    isHalf: true,
    activeColor: "#EC0101",
    size: 22,
    edit: false
  }

  const configSmallReactStars = {
    ...configReactStars,
    value: 4.5
  };

  return (
    <div className="row" style={{ marginBottom: 0 }}>
      <div className={`card-panel grey lighten-5 z-depth-1 ${classes.cardnostyle}`}>
        <div className="row valign-wrapper">
          <div className="col m1">
            <Avartar nickName="Triệu Lộ Tư" />
          </div>
          <div className="col m10" style={{ margin: 0 }}>
            <div className="row" style={{ margin: 0 }} >
              <h6 className={classes.darkfontheader}>Triệu lộ tư</h6>
            </div>
            <div className="row" style={{ margin: 0 }}>
              <ReactStars {...configSmallReactStars} />
            </div>
            <div className="row" style={{ margin: 0 }}>
              <p className={classes.darkfonttext}>“With your budget in mind, it is easy to plan a chartered yacht vacation.
                Companies often have a fleet of sailing vessels that can accommodate parties of various sizes.”</p>
            </div>
            <div className="row" style={{ margin: 0 }}>
              <p className={classes.darkfonttext} style={{ color: "#989898" }}>35 mins ago, 15 November 2019</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


