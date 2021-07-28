import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestCourses, fetchMostViewCourses } from '../../redux/actions/course';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';

const Home = () => {
  const dispatch = useDispatch();
  const { latestCourses, mostViewCourses } = useSelector((state) => state);
  const videoReducer = useSelector((state) => state.videoReducer);

  console.log('video state', videoReducer);
  useEffect(() => {
    dispatch(fetchLatestCourses());
    dispatch(fetchMostViewCourses());
  }, [dispatch]);


  return (
    <Layout>
      <div className={classes.container}>
        <Hero />
        <main className={classes.main}>
          <div>
            <div className={classes.welcome}>
              <p>Tất cả các khóa học đặc sắc nhất</p>
              <p>được cập nhật hàng tuần, hàng tháng</p>
            </div>
            <section>
            <Courses courses={latestCourses.data} title='Những khóa học mới nhất' />
          </section>
          <section>
            <Courses courses={mostViewCourses.data} title='Lượt xem nhiều nhất' />
          </section>
          </div>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
