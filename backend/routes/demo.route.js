const router = require('express').Router();
const demoService = require('../services/demo.service');

/**
 * @openapi
 * 
 * /demo:
 *   get:
 *     description: demo swagger js
 *     tags: [Demo]
 *     responses:
 *       200:
 *         description: GET DATA
 */
router.get('/',function (req, res) {
    //Handle input

    //Handle services
    const ret = demoService.load();

    //Handle output
    res.status(ret.code).json(ret.data);
})

/**
 * @openapi
 * 
 * /demo:
 *   post:
 *     description: demo swagger js
 *     tags: [Demo]
 *     responses:
 *       200:
 *         description: Created
 */
 router.post('/',function (req, res) {
    //Handle input

    //Handle services
    const ret = demoService.load();

    //Handle output
    res.status(ret.code).json(ret.data);
})

module.exports = router;