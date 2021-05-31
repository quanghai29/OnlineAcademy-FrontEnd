const {Code, Message} = require('../helper/statusCode.helper');
const courseModel = require('../models/course.models');


//#region Quang Hai MTP
async function getCourseDetail(id) {
    let returnModel = {}; // code; message; data
    const course = await courseModel.single(id);
    if(course == null){
        returnModel.code = Code.Not_Found;
    }else{
        returnModel.code = Code.Success;
        returnModel.data = course;
    }
    return returnModel;
}

//#endregion

module.exports = {
    getDetailSerive
};
