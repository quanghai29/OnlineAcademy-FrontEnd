import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLatestCourses, fetchMostViewCourses } from '../../redux/actions/course';
import { fetchHotCourse } from '../../redux/actions/hotCourses';
import { fetchHotCategories } from '../../redux/actions/categories';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
import HotCategories from '../../components/HotCategories';

const Home = () => {
  const dispatch = useDispatch();
  const { latestCourses, mostViewCourses, hotCourses ,hotCategories } = useSelector((state) => state);
  const videoReducer = useSelector((state) => state.videoReducer);

  console.log('video state', videoReducer);
  useEffect(() => {
    dispatch(fetchLatestCourses());
    dispatch(fetchMostViewCourses());
    dispatch(fetchHotCourse());
    dispatch(fetchHotCategories());
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
            <Courses courses={mostViewCourses.data} title='Những khóa học được xem nhiều nhất' />
          </section>
          <section>
            <Courses courses={hotCourses.data} title='Những khóa học nổi bật nhất' />
          </section>
          <section>
            <HotCategories categories={hotCategories.data} title='Danh mục nổi bật' />
          </section>
          </div>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
