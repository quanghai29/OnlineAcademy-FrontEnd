import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourse } from '../../redux/actions/course';
import { fetchHotCourse } from '../../redux/actions/hotCourses';
import Layout from '../../layout/Layout';
import classes from './Home.module.scss';
import Courses from '../../components/Courses';
import Hero from '../../components/Hero';

// const courses = [
//   {
//     id: 1,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '3.5',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 2,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '1.2',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 3,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '3.2',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 4,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '3.5',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 5,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '2.4',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 6,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '5.0',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 7,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '3.3',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 8,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '3',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   },
//   {
//     id: 9,
//     image: 'assets/images/course/course1.png',
//     title: 'The complete web development 2021',
//     lecturer: 'Quang hai',
//     rating: '3',
//     totalStudent: '1,000,000',
//     price: '599.000'
//   }
// ]

const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.courses);
  const { data1 } = useSelector(state => state.hotCourses);

  useEffect(() => {
    dispatch(fetchCourse());
    dispatch(fetchHotCourse());
  }, [dispatch]);

  console.log(data1);

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
            <Courses courses={data} title='Hot Trong Tuần' />
          </section>
          <section>
            <Courses courses={data1} title='Lượt xem nhiều nhất' />
          </section>
        </main>
      </div>
      {/* <DevTools /> */}
    </Layout>
  );
};

export default Home;
