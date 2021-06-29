const db = require('../utils/db');

const table_name = 'lecturer';
module.exports = {
  async getLecturerById(id) {
    const lecturer = await db(table_name).where('id', id);
    if (lecturer.length === 0) {
      return null;
    }

    return lecturer[0];
  },
};
