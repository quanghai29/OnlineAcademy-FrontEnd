import React from 'react';
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { setSelectedCourse } from '../../../redux/actions/selectedCourse';
import HorizotalCard from '../HorizotalCard';
import classes from './CourseTable.module.scss';

const CourseItem = ({course}) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClickEditHandler = (e) => {
    dispatch(setSelectedCourse(course));
    history.push('/update-course');
  }

    return (
        <tr>
          <td>{course.id}</td>
          <td>{<HorizotalCard title={course.title} shortDesc={course.short_description} img_source={course.img_source} />}</td>
          <td>{course.create_date}</td>
          <td>{course.last_update}</td>
          <td>{+course.status === 0 ? 'Chưa hoàn thành' : 'Đã hoàn thành'}</td>
          <td>
            <button onClick={onClickEditHandler} className={`${classes.editBtn} ${classes.Btn}`}><span className="material-icons">edit</span></button>
            <button className={`${classes.deleteBtn} ${classes.Btn}`}><span className="material-icons">delete</span></button>
          </td>
        </tr>
    )
}

export default CourseItem
