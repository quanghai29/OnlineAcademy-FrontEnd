import React from 'react';
import currency from 'currency.js';
import ReactStars from "react-rating-stars-component";
import classes from './Course.module.scss';

const Course = ({ title, lecturer, rating, totalStudent, price}) => (
    <article className={classes.card}>
      <img src="assets/images/course/course1.png" alt={`Course ${title}`} />
      <div className={classes.content}>
        <p className={classes.title}>{title}</p>
        <p className={classes.lecturer_name}>{lecturer}</p>
        <div className={classes.description}>
          <div className={classes.rating}>
            <p>{rating}</p>
            <ReactStars
                isHalf={true}
                activeColor="#EC0101"
                size={25}
                value={+rating}
                edit={false}
              />
          </div>
          <div className={classes.fence}></div>
          <div className={classes.students}>
          <p>{totalStudent}</p>
          <img src="assets/images/course/student.png" alt="student" />
          </div>
        </div>
        <p>{currency(price, { separator: ',', symbol: '', precision: 0 }).format()} VND</p>
      </div>
    </article>
);

export default Course;
