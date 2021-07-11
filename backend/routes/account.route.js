const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const accountService = require('../services/account.service');

const signupSchema = require('../schema/account/signup.account.json')
router.post('/signup', require('../middlewares/validate.mdw')(signupSchema),
  async (req, res) => {
    const newAcc = req.body;
    const checkExisting = await accountService.checkExistingAccount(newAcc.username);
    if (checkExisting.isExist) {
      res.json(checkExisting);
    } else {
      newAcc.password = bcrypt.hashSync(newAcc.password, 10);
      const ret = await accountService.createAcc(newAcc);
      delete newAcc.password;

      //send OTP-code by email
      const otpCode = accountService.generateCode();
      const otpToken = jwt.sign({
        otpCode,
        id: ret.data.id
      }, process.env.JWT_TOKEN, {
        expiresIn: process.env.OTP_EXPIRES_IN // seconds (60s)
      });
      await accountService.sendOtpCodeByEmail(req.body.email, otpCode);

      ret.otpToken = otpToken;
      res.status(ret.code).json(ret);
    }

  })

const verifyCodeSchema = require('../schema/account/verifyCode.account.json');
const validateCodeSchema = require('../middlewares/validate.mdw')(verifyCodeSchema);
const authMiddleware = require('../middlewares/auth.mdw');
router.post('/verify-code',authMiddleware, validateCodeSchema,
  async (req, res) => {
    const code = req.body.code;
    const tokenPayload = req.accessTokenPayload;
    if(code === tokenPayload.otpCode){
      //active email
      const result = await accountService.activeEmail(tokenPayload.id);
      res.status(result.code).json(result);
    }else{
      res.json({message: 'The code is not correct!'});
    }
  })

const loginSchema = require('../schema/account/login.account.json')
router.post('/login', require('../middlewares/validate.mdw')(loginSchema),
  async (req, res) => {

  })

module.exports = router;