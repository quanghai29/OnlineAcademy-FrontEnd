import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLecturerCourse } from '../../../redux/actions/coursesOfLecturer';
import Layout from '../../../layout/Layout';
import CourseTable from '../../../components/Lecturer/CourseTable';
import Pagination from '../../../components/Pagination';
import classes from './Home.module.scss';

const HomeLecturer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(3);
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.coursesOfLecturer);

  useEffect(() => {
    dispatch(fetchLecturerCourse());
  }, [dispatch]);

  // Get current posts
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalCourses = data.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage) + 1;

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber === 0 || pageNumber === totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  return (
    <Layout>
      <div className="container">
        <div className={classes.header}>
          <p>Khóa học của tôi</p>
          <a href="#!" className="waves-effect waves-light btn">
            <i class="material-icons left">add_box</i>Tạo khóa học
          </a>
        </div>
        <CourseTable courses={currentCourses} isLoading={isLoading} />
        <Pagination
          coursesPerPage={coursesPerPage}
          totalCourses={totalCourses}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </Layout>
  );
};

export default HomeLecturer;
