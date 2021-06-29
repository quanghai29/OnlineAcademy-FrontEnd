const router = require('express').Router();
const studentServices = require('../../services/student.service');

router.get('/favorite', async (req, res)=>{
  // const student_id = req.accessTokenPayload.student_id;
  const student_id = req.headers['student_id'];//test
  const result = await studentServices.getFavoriteCourse(student_id);

  res.status(result.code).json(result.data);
})

module.exports = router;