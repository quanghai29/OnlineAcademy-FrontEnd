const db = require("../utils/db");

const table_name = "category";
module.exports = {
  all() {
    return db(table_name);
  },

  async single(id) {
    const category = await db(table_name).where("id", id);
    if (category.length === 0) {
      return null;
    }

    return category[0];
  },

  add(category) {
    return db(table_name).insert(category);
  },
  
  //{duration: số lượng ngày, amount: số dòng lấy}
  async getMostRegister({duration , amount}){
    const sql =  `` +
      `SELECT sc.register_date, ct.*, count(*) as register 
      FROM online_academy.student_course as sc 
      inner join online_academy.course as c on sc.course_id = c.id
      inner join online_academy.category as ct on c.category_id = ct.id 
      where sc.register_date between (now() - interval ${duration} day) and now()
      group by c.category_id
      order by register, sc.register_date desc limit ${amount}`
    const categories = await db.raw(sql);
    if(categories.length > 0)
      return categories[0];
    return null;
  }
};
