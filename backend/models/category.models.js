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

  getAllCategroy(){
    knex.raw(`call GetALLCategory(${param}, @outmsg); select @outmsg as outmsg;`);
    return db.raw(`call GetALLCategory`)
  }
};
