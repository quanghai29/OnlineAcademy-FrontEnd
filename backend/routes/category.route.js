const router = require('express').Router();
const categoryService = require('../services/category.service');

//#region QuangHai
/**
 * @openapi
 * 
 * /category:
 *   get:
 *     description: get all category
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: json data if sucess
 */
 router.get('/', async function (req, res) {
    const ret = await categoryService.getAllCategory();
    res.status(ret.code).json(ret.data);
})

//#endregion

module.exports = router;
