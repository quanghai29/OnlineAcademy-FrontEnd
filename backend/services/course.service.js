const { Code, Message } = require('../helper/statusCode.helper');
const courseModel = require('../models/course.models');
const moment = require('moment');


//#region Quang Hai MTP
async function getCourseDetail(id) {
    let returnModel = {}; // code; message; data
    const course = await courseModel.single(id);
    if (course == null) {
        returnModel.code = Code.Not_Found;
    } else {
        course.last_update = moment(course.last_update).format('DD/MM/YYYY HH:mm:ss');
        returnModel.code = Code.Success;
        returnModel.data = course;
    }
    return returnModel;
}

//#endregion

//#region TienDung

async function insertCourse(course) {
    let returnModel = {};
    const ret = await courseModel.add(course);
    course.id = ret[0];
    returnModel.code = Code.Created_Success;
    returnModel.message = Message.Created_Success;
    returnModel.data = course;
    return returnModel;
}

async function getLatestCourse(amount) {
    let returnModel = {};
    const ret = await courseModel.getLatestCourse(amount);
    if(ret == null) {
        returnModel.code = Code.Not_Found;
    } else {
        returnModel.code = Code.Success;
        returnModel.data = ret;
    }
    return returnModel;
}

//#endregion

//#region Linh Đồng
async function getCourseByCategory(category_id) {
    let returnModel = {};

    const courses = await courseModel.allByCategory(category_id);
    if (!courses) {
        returnModel.code = Code.Bad_Request;
        returnModel.message = Message.Bad_Request;
    } else {
        returnModel.code = Code.Success;
        returnModel.message = Message.Success;
    }
    returnModel.data = courses;

    return returnModel;
}

async function findCourse(text) {
    let retData = {};
    if (text) {
        const courses = await courseModel.fullTextSearch(text);
        retData.code = Code.Success;
        retData.message = Message.Success;
        retData.data = courses;
    }else{
        retData.code = Code.Bad_Request;
        retData.message = Message.Bad_Request;
    }

    return retData;
}
//#endregion


module.exports = {
    getCourseDetail, insertCourse, getCourseByCategory,
    findCourse, getLatestCourse
};
