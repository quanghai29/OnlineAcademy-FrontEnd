import React from 'react';
import Layout from '../../layout/Layout';
//import VideoPlayer from '../../components/CoursesOverview/VideoPlayer';
import OverviewInfo from '../../components/CoursesOverview/OverviewInfo';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';

const CourseOverview = () => {
  return (
    <Layout>
      <OverviewInfo/>
      <CourseDetail/>
    </Layout>
  );
};

export default CourseOverview;
