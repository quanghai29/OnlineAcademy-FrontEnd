import React, { Fragment } from 'react';

const Course = ({ title }) => (
  <Fragment>
    <h3>{title}</h3>
    <article>
      <img src="assets/images/course/course1.png" alt="course 1" />
      <div>
        <p>The complete web development 2021</p>
        <p>Quang hai</p>
      </div>
    </article>
  </Fragment>
);

export default Course;
