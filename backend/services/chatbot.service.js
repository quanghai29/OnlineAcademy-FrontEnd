
const courseService = require('./course.service');
const categoryService = require('./category.service');
const { type } = require('../helper/type.chatbot.helper');

function startBot() {
  return {
    'attachment': {
      'type': 'template',
      'payload': {
        'template_type': 'generic',
        'elements': [{
          'title': 'Xem danh sách các khóa học bằng?',
          'buttons': [
            {
              'type': 'postback',
              'title': 'Danh mục',
              'payload': JSON.stringify({ type: type.categories }),
            },
            {
              'type': 'postback',
              'title': 'Tìm kiếm từ khóa',
              'payload': JSON.stringify({ type: type.search }),
            }
          ],
        }]
      }
    }
  };
}

async function getCourseDetail(id = 1) {
  const course = (await courseService.getCourseDetail(id)).data;
  if (course) {
    //
    let msg_chapters = ``;
    course.chapters.forEach(chapter => {
      msg_chapters += `\t# ${chapter.title}\n`;
    })

    //
    const msg = `### ${course.title} ###\n`
      + `- Học phí: ${course.price} VND\n`
      + `- *Khuyến mãi: ${course.discount}%\n`
      + `- Mô tả sơ lược: ${course.short_description}\n`
      + `- Thông tin giảng viên: \n`
      + `\t+ Họ tên: ${course.lecturer_name}\n`
      + `\t+ Kinh nghiệm: ${course.lecturer_experience_year} year\n`
      + `\t+ Ngôn ngữ: ${course.lecturer_programing_language}\n`
      + `- Đánh giá: 5 sao\n`
      + `- Rating: 54,1445\n`
      + `- Số học viên đăng ký: 497,213 students\n`
      + `- Last updated: ${course.last_update}\n`
      + `- <Đề cương khóa học> \n`
      + msg_chapters

    return {'text': msg };
  }
  return { 'text': 'Not Found' }
}

async function getAllCategory() {
  const res = await categoryService.getAllCategory();
  if (res.data) {
    const data = res.data;
    let elements = [];
    let temp = [];
    for (let i = 0; i < data.length; i++) {
      temp.push({
        "type": "postback",
        "title": data[i].category_name,
        "payload": JSON.stringify({
          type: type.course_by_category,
          msg: data[i].id
        })
      })
      if (temp.length === 3) {
        elements.push({
          'title': 'Danh sách các danh mục',
          'buttons': temp
        })
        temp = [];
      }
    }

    if (temp.length > 0) {
      elements.push({
        'title': 'Danh sách các danh mục',
        'buttons': temp
      })
    }

    return {
      'attachment': {
        'type': 'template',
        'payload': {
          'template_type': 'generic',
          'elements': elements
        }
      }
    };
  }
  return { 'text': 'Not Found' }
}

async function getCourseByCategory(category_id) {
  const res = await courseService.getCourseByCategory(category_id);
  if (res.data) {
    let elements = [];

    res.data.forEach(course => {
      const object = {
        'title': course.title,
        'subtitle': course.price + ' VND',
        'image_url':'https://9727f34875c2.ngrok.io/common/media/image/?path=' + '/img/course/1/Trieu-Lo-Tu-Co-Trang.png',
        'buttons': [{
          'type': 'postback',
          'title': 'Chi tiết',
          'payload': JSON.stringify({
            type: type.course_detail,
            msg: course.id
          })
        }]
      }
      elements.push(object);
    });

    return {
      'attachment': {
        'type': 'template',
        'payload': {
          'template_type': 'generic',
          'elements': elements
        }
      }
    };
  }
  return { 'text': 'Not Found' }
}



module.exports = {
  getCourseDetail, getAllCategory, startBot, getCourseByCategory
};
