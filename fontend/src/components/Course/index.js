import React from 'react';
import RatingStar from '../RatingStar';
import classes from './Course.module.scss';

const Course = () => (
    <article className={classes.card}>
      <img src="assets/images/course/course1.png" alt="course 1" />
      <div className={classes.content}>
        <p className={classes.title}>The complete web development 2021</p>
        <p className={classes.lecturer}>Quang hai</p>
        <div className={classes.description}>
          <div className={classes.rating}>
            <p>5.0</p>
            <RatingStar rate={3} />
          </div>
          <div className={classes.fence}></div>
          <div className={classes.students}>
          <p>1,000,000</p>
          <img src="assets/images/course/student.png" alt="student" />
          </div>
        </div>
        <p>599.000 VND</p>
      </div>
    </article>
);

export default Course;
