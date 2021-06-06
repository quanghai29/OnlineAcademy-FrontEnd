const db = require("../utils/db");

const table_name = "course";
module.exports = {
  all() {
    return db(table_name);
  },

  async single(id) {
    const courses = await db(table_name).where("id", id);
    if (courses.length === 0) {
      return null;
    }

    return courses[0];
  },

  add(course) {
    return db(table_name).insert(course);
  },

  async allByCategory(category_id) {
    const courses = await db(table_name).where("category_id", category_id);
    if (courses.length === 0) {
      return null;
    }

    return courses;
  },

  async fullTextSearch(text) {
    const courses = await db.raw(`
    SELECT *, MATCH (title, short_description, full_description) AGAINST ('${text}') as score
    FROM course WHERE MATCH (title, short_description, full_description) AGAINST ('${text}') > 0 ORDER BY score DESC;
    `);

    if (courses.length === 0) {
      return null;
    }

    return courses[0];
  },

  async getLatestCourses(amount) {
    const courses = await db(table_name)
      .orderBy("create_date", "desc")
      .limit(amount);
    if (courses.length === 0) {
      return null;
    }

    return courses;
  },

  async getMostViewCourses(amount) {
    const courses = await db.raw(`
    SELECT course_id, sum(views) AS sum_view, DATE_FORMAT(upload_date, '%m/%d/%Y') 
    FROM video 
    INNER JOIN chapter 
    ON chapter_id=chapter.id 
    WHERE upload_date BETWEEN NOW() - INTERVAL 30 DAY AND NOW() 
    GROUP BY course_id 
    ORDER BY sum_view DESC LIMIT ${amount};
    `);

    if (courses.length === 0) {
      return null;
    }

    return courses[0];
  },

  async outstandingCourses() {
    const courses = await db('course').innerJoin(function() {
      this.select('course_id').sum('vote').from('student_course')
        .groupBy('course_id').orderBy('vote', 'desc').as('sum_vote')
    }, 'course.id', '=', 'sum_vote.course_id').limit(2);

    return courses;
  }

};
