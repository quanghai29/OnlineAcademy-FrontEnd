import React from 'react';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';
// import DevTools from '../../containers/DevTools';

const Home = () => {
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
            <Courses title='Hot Trong Tuần' />
          </section>
          <section>
            <Courses title='Lượt xem nhiều nhất' />
          </section>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
