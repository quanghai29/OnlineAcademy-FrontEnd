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
router.get('/:id',async function (req, res) {
    const id = req.params.id || 0;
    const ret = await courseService.getCourseDetail(id);
    res.status(ret.code).json(ret.data);
})

//#endregion

//#region TienDung

/**
 * @openapi
 * 
 * /course/{id}:
 *   post:
 *     description: add a course
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *     responses:
 *       201:
 *         description: successfully created course
 */ 
const schema = require('../schema/course.json');

router.post('/', require('../middlewares/validate.mdw')(schema), async (req, res) => {
    const newCourse = req.body;
    const ret = await courseService.insertCourse(newCourse);
    res.status(ret.code).json(ret.data);
})

//#endregion

module.exports = router;