import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../../redux/actions/course';
import { fetchHotCourse } from '../../redux/actions/hotCourses';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
import { setVideoInfo } from '../../redux/actions/video';
import ListRowCourse from '../../components/ListRowCourses';

const Home = () => {
  const dispatch = useDispatch();
  const { courses, hotCourses } = useSelector((state) => state);
  const searchCourseState = useSelector(state=>state.searchCourseReducer)
  const videoReducer = useSelector((state)=>state.videoReducer);
  
  console.log('video state', videoReducer);

  useEffect(() => {
    dispatch(fetchCourses());
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
          <section>
            <ListRowCourse arrData={searchCourseState.result}/>
          </section>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
