const { Code, Message } = require('../helper/statusCode.helper');
const chapterModel = require('../models/chapter.models');

//#region TienDung

async function insertChapter(chapter) {
    let returnModel = {};
    const ret = await chapterModel.add(chapter);
    chapter.id = ret[0];
    returnModel.code = Code.Created_Success;
    returnModel.message = Message.Created_Success;
    returnModel.data = chapter;
    return returnModel;
}

//#endregion

module.exports = {
    insertChapter
}