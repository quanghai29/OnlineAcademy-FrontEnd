const router = require('express').Router();
const accountService = require('../services/account.service');


const signupSchema = require('../schema/account/signup.account.json')
router.post('/signup', require('../middlewares/validate.mdw')(signupSchema), async (req, res) => {
  const newAcc = req.body;
  const ret = await accountService.createAcc(newAcc);
  res.status(ret.code).json(ret.data);
})

const loginSchema = require('../schema/account/login.account.json')
router.post('/login', require('../middlewares/validate.mdw')(loginSchema), async (req, res) => {
})

module.exports = router;