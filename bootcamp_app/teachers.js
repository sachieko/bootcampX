const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT DISTINCT teachers.name teacher, cohorts.name cohort
FROM teachers JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name ILIKE $1
ORDER BY teacher;
`, [process.argv[2] + '%'])
  .then(res => {
    console.log('connected');
    res.rows.forEach(teacher => {
      console.log(`${teacher.cohort}: ${teacher.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));