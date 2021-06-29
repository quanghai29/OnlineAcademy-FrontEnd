const router = require('express').Router();
const path = require('path');

//#region QuangHai

/**
 * @openapi
 * 
 * /common/media/image?path:
 *   get:
 *     description: display image
 *     tags: [Common]
 *     parameters:
 *       - in: path
 *         name: path   # Note the name is the same as in the path
 *         required: true
 *         schema:
 *           type: string
 *           default: /img/course/1/Trieu-Lo-Tu-Co-Trang.png
 *     responses:
 *       200:
 *         description: image display
 */
 router.get('/image/', function (req, res) {
  const img_path = req.query.path || '/img/course/1/Trieu-Lo-Tu-Co-Trang.png';
   res.sendFile(path.join(__dirname, '../../public' + img_path ));
})

//#endregion

module.exports = router;