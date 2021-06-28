const { Code, Message } = require('../helper/statusCode.helper');
const categoryModel = require('../models/category.models');
const moment = require('moment');


//#region Quang Hai MTP
async function getAllCategory() {
    let returnModel = {}; // code; message; data
    const categories = await categoryModel.all();
    if (categories == null) {
        returnModel.code = Code.Not_Found;
    } else {
        categories.forEach(category => {
            category.last_update = moment(category.last_update).format('DD/MM/YYYY HH:mm:ss');
        });
        returnModel.code = Code.Success;
        returnModel.data = categories;
    }
    return returnModel;
}

//#endregion

module.exports = {
    getAllCategory
};
