import React from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import Swal from "sweetalert2"
import { setSelectedCourse } from '../../../redux/actions/selectedCourse';
import { setIsUpdateCourse, deleteCourseById } from '../../../redux/actions/coursesOfLecturer';
import { requestFetchChaptersOfCourse } from '../../../redux/actions/chaptersOfCourse'
import HorizotalCard from '../HorizotalCard';
import classes from './CourseTable.module.scss';

const CourseItem = ({course}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickEditHandler = (e) => {
    dispatch(setSelectedCourse(course));
    dispatch(requestFetchChaptersOfCourse(course.id));
    dispatch(setIsUpdateCourse(true));
    history.push('/update-course');
  }

  const onClickDeleteCourseHandler = (e) => {
    Swal.fire({
      title: "Warning",
      text: "bạn có chắc muốn xóa",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'YES'
    }).then((result) => {
      if(result.isConfirmed) {
        dispatch(deleteCourseById(course.id));
      } 
    })
  }

    return (
        <tr>
          <td>{course.id}</td>
          <td>{<HorizotalCard title={course.title} shortDesc={course.short_description} img_source={course.img_source} />}</td>
          <td>{course.create_date}</td>
          <td>{course.last_update}</td>
          <td>{+course.course_status === 0 ? 'Chưa hoàn thành' : 'Đã hoàn thành'}</td>
          <td>
            <button onClick={onClickEditHandler} className={`${classes.editBtn} ${classes.Btn}`}><span className="material-icons">edit</span></button>
            <button onClick={onClickDeleteCourseHandler} className={`${classes.deleteBtn} ${classes.Btn}`}><span className="material-icons">delete</span></button>
          </td>
        </tr>
    )
}

export default CourseItem
