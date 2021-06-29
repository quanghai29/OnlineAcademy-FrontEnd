const router = require('express').Router();
const studentServices = require('../../services/student.service');

//#region Mai Linh Đồng
/**
 * @openapi
 *
 * /student/courses/favorite:
 *  get:
 *      description: get favorite courses belong to a student
 *      tags: [Student]
 *      parameters:
 *
 *      responses:
 *          200:
 *              description: json data
 */
router.get('/favorite', async (req, res)=>{
  // const student_id = req.accessTokenPayload.student_id;
  const student_id = req.headers['student_id'];//test
  const result = await studentServices.getFavoriteCourses(student_id);

  res.status(result.code).json(result.data);
})

/**
 * @openapi
 *
 * /student/courses/favorite:
 *  delete:
 *      description: delete a favorite course of a student
 *      tags: [Student]
 *      parameters:
 *
 *      responses:
 *          200:
 *              description: json data, return count of rows which deleted
 */
router.delete('/favorite', async (req, res)=>{
  // const student_id = req.accessTokenPayload.student_id;
  const student_id = req.headers['student_id'];//test
  const course_id = req.headers['course_id'];
  const result = await studentServices.deleteOneFavorite(student_id, course_id);

  res.status(result.code).json(result.data);
})
//#endregion

module.exports = router;