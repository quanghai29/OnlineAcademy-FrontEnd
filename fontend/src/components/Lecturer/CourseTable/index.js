import CourseItem from './CourseItem';
import PreLoading from '../../PreLoading';

const CourseTable = ({ courses, isLoading }) => {
  if(isLoading) {
    return <PreLoading />
  }

  return (
    <table className="highlight">
      <thead>
        <tr>
          <th>STT</th>
          <th>Khóa học</th>
          <th>Ngày tạo</th>
          <th>Cập nhật lần cuối</th>
          <th>Trạng thái</th>
          <th style={{width: 101}}>&nbsp;</th>
        </tr>
      </thead>

      <tbody>
        {courses.map(course => (
          <CourseItem key={course.id} course={course} />
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
