const db = require('../utils/db');

module.exports = {
  async getFavoriteCoursesOfStudent(student_id){
    const favoriteList = await db('course').rightJoin(
      function(){
        this.select('course_id')
        .from('list_favorite')
        .where('student_id', student_id)
        .as('list')
      }, 'course.id', '=', 'list.course_id'
    )

    return favoriteList;
  }, 

  async deleteOneFavoriteCourse(student_id, course_id){
    const result = await db('list_favorite')
    .where({student_id: student_id, course_id: course_id})
    .del();

    return result;
  }
}