const router = require('express').Router();
const studentServices = require('../../services/student.service');

//#region Mai Linh Đồng
/**
 * @openapi
 *
 * /student/favorite-courses:
 *  get:
 *     description: get favorite courses of a student
 *     tags: [Student]
 *     parameters:
 *          - in: header
 *            name: student_id
 *            schema:
 *              type: integer
 *            required: true
 *     responses:
 *           200:
 *              description: json data
 */
router.get('/favorite-courses', async (req, res)=>{
  // const student_id = req.accessTokenPayload.student_id;
  const student_id = req.headers['student_id'];//test
  const result = await studentServices.getFavoriteCourses(student_id);

  res.status(result.code).json(result.data);
})

/**
 * @openapi
 *
 * /student/favorite-courses/{id}:
 *  delete:
 *      description: delete a favorite course of a student
 *      tags: [Student]
 *      parameters:
 *            - in: path
 *              name: id
 *              required: true
 *              schema:
 *                  type: integer
 *                  minimum: 0
 *                  default: 0
 *      responses:
 *          200:
 *              description: int, return count of rows which deleted
 */
router.delete('/favorite-courses/:id', async (req, res)=>{
  // const student_id = req.accessTokenPayload.student_id;
  const course_id = +req.params.id || 0;
  const result = await studentServices.deleteOneFavorite(course_id);

  res.status(result.code).json(result.data);
})
//#endregion

module.exports = router;