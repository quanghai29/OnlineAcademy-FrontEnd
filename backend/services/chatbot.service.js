
const courseService = require('./course.service');

async function getCourseDetail(id = 1){
    const data = (await courseService.getCourseDetail(id)).data;
    if(data){
        const msg = `Tên khóa học: ${data.title}\n`
                + `Học phí: ${data.price}\n`
                + `Khuyến mãi: ${data.discount}\n`
                + `Sơ lược khóa học: ${data.short_description}\n`
                + `Lần cập nhật cuối: ${data.last_update}`
                + `Các chủ đề: \n`
        return {
            'text' : msg
        }
    }
    return {'text': 'Not Found'}
}

module.exports = {
    getCourseDetail
};
