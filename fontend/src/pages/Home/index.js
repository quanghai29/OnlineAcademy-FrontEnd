import React from 'react';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Course from '../../components/Course';
// import DevTools from '../../containers/DevTools';

const Home = () => {
  return (
    <Layout>
      <div className={classes.container}>
        <div className={classes.hero}>
          <div className={classes.heroTitle}>
            <img src="assets/images/home/heroTitleBg.png" alt="hero title bg" />
            <div className={classes.title}>
              <h2>Mùa dịch tới, với GEL VIE</h2>
              <h2>Ngồi tại nhà, học thả ga</h2>
              <p>GEL VIE - Nỗ lực cùng bạn vươn tới thành công</p>
              <button>Đăng ký ngay</button>
            </div>
          </div>
          <div className={classes.girlBg}>
            <img src="assets/images/home/girlBg.png" alt="girl bg" />
          </div>
        </div>
        <main className={classes.main}>
          <div className={classes.welcome}>
            <p>Tất cả các khóa học đặc sắc nhất</p>
            <p>được cập nhật hàng tuần, hàng tháng</p>
          </div>
          <section>
            <Course title='Hot Trong Tuần' />
          </section>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
