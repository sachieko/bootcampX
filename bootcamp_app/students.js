const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'bootcampx'
});

// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 10
// `)
//   .then(res => {
//     const input = res.rows;
//     for (const element of input) {
//       console.log(element.name);
//     }
//   })
//   .catch(err => console.error('query error', err.stack));

pool.query(`
SELECT students.id as student_id, students.name as student_name, cohorts.name AS cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name ILIKE $1
LIMIT $2;
`, [process.argv[2] + '%', process.argv[3]])
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.student_name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });
  })
  .catch(err => console.error('query error', err.stack));