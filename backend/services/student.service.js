const studentModel = require('../models/student.models');
const { Code, Message } = require('../helper/statusCode.helper');

//#region Mai Linh Đồng
async function getFavoriteCourse(student_id) {
  let retData = {};
  const courses = await studentModel.getFavoriteCoursesOfStudent(student_id);
  retData.code = Code.Success;
  retData.message = Message.Success;
  retData.data = courses;

  return retData;
}

//#endregion

module.exports = {
  getFavoriteCourse
}