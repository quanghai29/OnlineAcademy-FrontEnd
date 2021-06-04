const db = require('../utils/db');

const table_name = 'chapter';
module.exports = {
    add(chapter) {
        return db(table_name).insert(chapter);
    }
}