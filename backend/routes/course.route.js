const router = require('express').Router();
const courseService = require('../services/course.service');

//#region QuangHai

/**
 * @openapi
 * 
 * /course/{id}:
 *   get:
 *     description: get detail course
 *     tags: [Course]
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
 *         description: json data if sucess
 */
 router.get('/:id', async function (req, res) {
    const id = req.params.id || 0;
    const ret = await courseService.getCourseDetail(id);
    res.status(ret.code).json(ret.data);
})

//#endregion


//#region Linh Đồng

/**
 * @openapi
 * 
 * /course?category_id:
 *  get:
 *      description: get all of courses which has category_id = number
 *      tags: [Course]
 *      parameters:
 *          - in: query
 *            name: category_id
 *            schema:
 *              type: integer
 *              minimum: 1
 *      responses:
 *          200:
 *              description: json data
 *          400:
 *              description: bad request
 */
 router.get('/', async (req, res) => {
    const category_id = +req.query.category_id || 0;
    const ret = await courseService.getCourseByCategory(category_id);
    res.status(ret.code).json(ret.data);
});

/**
 * @openapi
 * 
 * /course/search:
 *  post:
 *      description: find courses which concerning key words
 *      tags: [Course]
 *      parameters:
 *           -in: body
 *           name: text_search #example: {"text_search":"abc"}
 *           schema:
 *           type: string
 *      responses:
 *          200:
 *              description: json data
 */
 router.post('/search', async (req, res) => {
    const text = req.body.text_search;
    const ret = await courseService.findCourse(text);
    res.status(ret.code).json(ret.data);
});

/**
 * @openapi
 * 
 * /course/outstanding:
 *  post:
 *      description: find outstanding courses(by vote)
 *      tags: [Course]
 *      responses:
 *          200:
 *              description: json data
 */
router.post('/outstanding', async (req, res)=>{
    const ret = await courseService.getOutstandingCourses();
    res.status(ret.code).json(ret.data);
})
//#endregion

module.exports = router;