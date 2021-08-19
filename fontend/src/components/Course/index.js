import React from 'react';
import currency from 'currency.js';
import StarRatings from 'react-star-ratings';
import classes from './Course.module.scss';

const Course = ({ title, lecturer, rating, total_student, price, img_source, isBestseller, discount}) => (
    <article className={classes.card}>
      <img src={`http://localhost:3001/common/media/image/${img_source}`} onError={e => {e.target.onerror = null; e.target.src = 'assets/images/course/course1.png'}} alt={`Course ${title}`} />
      {isBestseller && <span className="new badge red" data-badge-caption="Bestseller"></span>}
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.lecturer_name}>{lecturer}</p>
        <div className={classes.description}>
          <div className={classes.rating}>
            <p>{rating ? rating : '0.0'}</p>
            <StarRatings rating={+rating}
                    starRatedColor="#EC0101"
                    name='rating' starDimension="20px" starSpacing="0"/>
          </div>
          <div className={classes.fence}></div>
          <div className={classes.students}>
          <p>{total_student}</p>
          <img src="assets/images/course/student.png" alt="student" />
          </div>
        </div>
        {+discount !== 0 && <span>{currency(+price - (+price*(+discount)/100), { separator: ',', symbol: '', precision: 0 }).format()} VND</span> }
        <span className={+discount !== 0 && classes.salePrice}>{currency(price, { separator: ',', symbol: '', precision: 0 }).format()} VND</span>
      </div>
    </article>
);

export default Course;
