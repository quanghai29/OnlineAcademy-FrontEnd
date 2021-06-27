const accountModel = require('../models/account.model');
const { Code, Message } = require('../helper/statusCode.helper');

async function createAcc(newAcc){
  const result = {};
  const acc = await accountModel.addAccount(newAcc);
  newAcc.id = acc[0];
  newAcc.password = null;
  result.code = Code.Success;
  result.message = Message.Success;
  result.data = newAcc;
  return result;
}

async function loginAcc(data){
}

module.exports = {
  createAcc, loginAcc
}