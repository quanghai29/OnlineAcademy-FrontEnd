const studentModel = require('../models/student.models');
const { Code, Message } = require('../helper/statusCode.helper');

//#region Mai Linh Đồng
async function getFavoriteCourses(student_id) {
  let retData = {};
  const courses = await studentModel.getFavoriteCoursesOfStudent(student_id);
  retData.code = Code.Success;
  retData.message = Message.Success;
  retData.data = courses;

  return retData;
}

async function deleteOneFavorite(student_id, course_id){
  let retData = {};
  const deletedInfo = await studentModel.deleteOneFavoriteCourse(student_id, course_id);
  retData.code = Code.Success;
  retData.message = Message.Success;
  retData.data = deletedInfo

  return retData;
}
//#endregion

module.exports = {
  getFavoriteCourses, deleteOneFavorite
}