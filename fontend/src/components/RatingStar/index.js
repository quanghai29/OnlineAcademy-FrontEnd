import React from 'react';
import classes from './RatingStar.module.scss';

const RatingStar = ({ rate }) => {
  const showStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.floor(+rate)) {
        stars.push(<span key={i} className={`fa fa-star ${classes.checked}`}></span>);
      } else {
        stars.push(<span key={i} className="fa fa-star"></span>);
      }
    }
    return stars;
  };

  return <div className={classes.stars}>{showStars()}</div>;
};

export default RatingStar;
