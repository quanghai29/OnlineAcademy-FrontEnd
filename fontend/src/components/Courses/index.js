import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Course from '../Course';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import classes from './Courses.module.scss';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

const Courses = ({ title, courses }) => (
  <Fragment>
    <h3 className={classes.title}>{title}</h3>
    <section className={classes.listCourse}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <Course {...course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  </Fragment>
);

export default Courses;
