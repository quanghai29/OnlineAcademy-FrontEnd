import React from 'react';
import Layout from '../../layout/Layout';
import VideoPlayer from '../../components/CoursesOverview/VideoPlayer';
import CourseDetail from '../../components/CoursesOverview/CourseDetail';

const CourseOverview = () => {
  return (
    <Layout>
      <VideoPlayer/>
      <CourseDetail/>
    </Layout>
  );
};

export default CourseOverview;
