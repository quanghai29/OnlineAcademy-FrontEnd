import React, { useEffect, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  fetchLecturerCourses,
  setIsUpdateCourse,
} from '../../../redux/actions/coursesOfLecturer';
import { resetChaptersOfCourse } from '../../../redux/actions/chaptersOfCourse';
import Layout from '../../../layout/Layout';
import CourseTable from '../../../components/Lecturer/CourseTable';
import Pagination from '../../../components/Pagination';
import classes from './Home.module.scss';
import WithAuthenticate from '../../../components/HOCs/withAuthenticate';
import { ROLE_LECTURER } from '../../../redux/constants/common';

const HomeLecturer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(5);
  const dispatch = useDispatch();
  const history = useHistory();
  const { data, isLoading } = useSelector((state) => state.coursesOfLecturer);

  useEffect(() => {
    const { userId } = JSON.parse(localStorage.decodePayload);
    dispatch(fetchLecturerCourses(userId));
  }, [dispatch]);

  // Get current posts
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = data.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalCourses = data.length;
  const totalPages = Math.ceil(totalCourses / coursesPerPage) + 1;
  console.log(currentCourses)

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber === 0 || pageNumber === totalPages) {
      return;
    }
    setCurrentPage(pageNumber);
  };

  const onClickAddNewCourseHandler = (e) => {
    dispatch(setIsUpdateCourse(false));
    dispatch(resetChaptersOfCourse());
    history.push('/update-course');
  };

  return (
    <Layout>
      <div className="container">
        <div className={classes.headerLecturer}>
          <p className={classes.title}>Khóa học của tôi</p>
          <button
            onClick={onClickAddNewCourseHandler}
            className="waves-effect waves-light btn"
          >
            <i className="material-icons left">add_box</i>Tạo khóa học
          </button>
        </div>
        {currentCourses.length === 0 ? (<p>Chưa có khóa học nào</p>) : (
          <Fragment>
            <CourseTable courses={currentCourses} isLoading={isLoading} />
            <Pagination
              coursesPerPage={coursesPerPage}
              totalCourses={totalCourses}
              currentPage={currentPage}
              paginate={paginate}
            />
          </Fragment>
        )}
      </div>
    </Layout>
  );
};

export default WithAuthenticate(HomeLecturer, [ROLE_LECTURER]);
