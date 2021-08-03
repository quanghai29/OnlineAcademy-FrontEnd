import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchLecturerCourses, setIsUpdateCourse } from '../../../redux/actions/coursesOfLecturer';
import Layout from '../../../layout/Layout';
import CourseTable from '../../../components/Lecturer/CourseTable';
import Pagination from '../../../components/Pagination';
import classes from './Home.module.scss';

const HomeLecturer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, isLoading } = useSelector((state) => state.coursesOfLecturer);

  useEffect(() => {
    const lecturer_id = 2; // {userId} = JSON.parse(localStorage.decodePayload);
    dispatch(fetchLecturerCourses(lecturer_id));
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

  const onClickAddNewCourseHandler = (e) => {
    dispatch(setIsUpdateCourse(false));
    history.push('/update-course')
  }

  return (
    <Layout>
      <div className="container">
        <div className={classes.header}>
          <p>Khóa học của tôi</p>
          <button onClick={onClickAddNewCourseHandler} className="waves-effect waves-light btn">
            <i className="material-icons left">add_box</i>Tạo khóa học
          </button>
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
