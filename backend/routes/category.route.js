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


/**
 * @openapi
 *
 * /category/mostRegisterOfWeek:
 *   get:
 *     description: get categories most register of week
 *     tags: [Category]
 *     responses:
 *       200:
 *         description: json data if sucess
 */
 router.get('/mostRegisterOfWeek', async function (req, res) {
    const ret = await categoryService.getMostRegister({duration: 7, amount: 2});
    res.status(ret.code).json(ret.data);
  });
  
//#endregion

module.exports = router;
