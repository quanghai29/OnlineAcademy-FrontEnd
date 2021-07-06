import React, { Fragment } from 'react';
import Course from '../Course';
import classes from './Courses.module.scss';

const Courses = ({title}) => <Fragment>
    <h3 className={classes.title}>{title}</h3>
    <section className={classes.listCourse}>
        <Course key={1} />
        <Course key={2} />
        <Course key={3} />
        <Course key={4} />
    </section>
</Fragment>

export default Courses;