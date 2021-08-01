import React from 'react';
import HorizotalCard from '../HorizotalCard';

const CourseItem = ({course}) => {
    return (
        <tr>
          <td>{course.id}</td>
          <td>{<HorizotalCard title={course.title} shortDesc={course.short_description} />}</td>
          <td>{course.create_date}</td>
          <td>{course.last_update}</td>
          <td>{+course.status === 0 ? 'Chưa hoàn thành' : 'Đã hoàn thành'}</td>
          <td>
            <span class="material-icons">edit</span>
            <span class="material-icons">delete</span>
          </td>
        </tr>
    )
}

export default CourseItem
