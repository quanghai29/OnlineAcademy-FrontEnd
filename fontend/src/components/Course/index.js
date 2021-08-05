import React from 'react';
import RatingStar from '../RatingStar';
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
            <RatingStar rate={rating} />
          </div>
          <div className={classes.fence}></div>
          <div className={classes.students}>
          <p>{totalStudent}</p>
          <img src="assets/images/course/student.png" alt="student" />
          </div>
        </div>
        <p>{price} VND</p>
      </div>
    </article>
);

export default Course;
