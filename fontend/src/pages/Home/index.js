import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from '../../redux/actions/course';
import { fetchHotCourse } from '../../redux/actions/hotCourses';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';

const Home = () => {
  const dispatch = useDispatch();
  const { courses, hotCourses } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchHotCourse());
    
  }, [dispatch]);

  return (
    <Layout>
      <div className={classes.container}>
        <Hero />
        <main className={classes.main}>
          <div className={classes.welcome}>
            <p>Tất cả các khóa học đặc sắc nhất</p>
            <p>được cập nhật hàng tuần, hàng tháng</p>
          </div>
          <section>
            <Courses courses={courses.data} title='Hot Trong Tuần' />
          </section>
          <section>
            <Courses courses={hotCourses.data} title='Lượt xem nhiều nhất' />
          </section>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
