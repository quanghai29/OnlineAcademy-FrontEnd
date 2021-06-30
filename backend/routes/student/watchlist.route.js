const router = require('express').Router();
const watchlistService = require('../../services/watchllist.service');

// #region QuangHai
/**
 * @openapi
 *
 * /student/watchlist:
 *   post:
 *     description: add watchlist
 *     tags: [Student]
 *     responses:
 *       200:
 *         description: list course favorite of student
 */
 router.post('/', async (req, res)=>{
  // const student_id = req.accessTokenPayload.student_id;
  const student_id = req.headers['student_id'];//test
  const course_id = req.body.course_id;
  const result = await watchlistService.addWatchlist({student_id, course_id});

  res.status(result.code).json(result.message);
})

/**
 * @openapi
 *
 * /student/watchlist/{id}:
 *   delete:
 *     description: add watchlist
 *     tags: [Student]
 *     parameters:
 *       - in: path
 *         name: id   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *     responses:
 *       200:
 *         description: list course favorite of student
 */
 router.delete('/:id', async (req, res)=>{
  const id = req.params.id;
  console.log(id);
  const result = await watchlistService.deleteWatchlist(id);
  res.status(result.code).json(result.message);
})
// #endregion


module.exports = router;