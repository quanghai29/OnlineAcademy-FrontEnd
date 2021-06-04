const router = require('express').Router();
const chapterService = require('../../services/chapter.service');

//#region TienDung

/**
 * @openapi
 * 
 * /chapter/lecturer:
 *   post:
 *     description: add a chapter
 *     tags: [chapter]
 *     parameters:
 *       - in: path
 *     responses:
 *       201:
 *         description: successfully created chapter
 */ 
 const schema = require('../../schema/chapter.json');

 router.post('/', require('../../middlewares/validate.mdw')(schema), async (req, res) => {
     const newChapter = req.body;
     const ret = await chapterService.insertChapter(newChapter);
     res.status(ret.code).json(ret.data);
 })
 
 //#endregion

 module.exports = router;