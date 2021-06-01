const db = require('../utils/db');

const table_name = 'course';
module.exports = {
  all() {
    return db(table_name);
  },

  async single(id) {
    const courses = await db(table_name).where('id', id);
    if (courses.length === 0) {
      return null;
    }

    return courses[0];
  },

  add(course) {
    return db(table_name).insert(course);
  },

  async allByCategory(category_id){
    const courses = await db(table_name).where('category_id',category_id);
    if(courses.length === 0){
      return null;
    }

    ///console.log('course model', courses);
    return courses;
  }
};
