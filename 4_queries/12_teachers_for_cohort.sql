SELECT DISTINCT teachers.name teacher, cohorts.name cohort
FROM teachers JOIN assistance_requests ON teachers.id = teacher_id
JOIN students ON students.id = student_id
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name = 'JUL02'
ORDER BY teacher;