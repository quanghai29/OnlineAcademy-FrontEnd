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

//#region TienDung

async function getAccountByUsername(username) {
  const returnModel = {};
  const account = await accountModel.getSingleAccountByUsername(username);
  if(account === null) {
    returnModel.code = Code.Not_Found;
  } else {
    returnModel.code = Code.Success;
    returnModel.data = account;
  }
  return returnModel;
}

async function updateRefreshToken(id, refreshToken) {
  const returnModel = {};
  const ret = await accountModel.updateRefreshToken(id, refreshToken);
  if(ret) {
    returnModel.code = Code.Success;
    returnModel.data = ret;
  }
  return returnModel;
}

async function isValidRefreshToken(id, refreshToken) {
  const returnModel = {};
  const ret = await accountModel.isValidRefreshToken(id, refreshToken);
  if(ret) {
    returnModel.code = Code.Success;
    returnModel.data = ret;
  } else {
    returnModel.code = Code.Not_Found;
    returnModel.data = ret;
  }
  return returnModel;
}

//#endregion

module.exports = {
  createAcc, loginAcc, getAccountByUsername, updateRefreshToken, isValidRefreshToken
}