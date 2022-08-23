SELECT count(assistance_requests.id) as total_assistances, students.name AS name
FROM assistance_requests JOIN students ON students.id = student_id 
WHERE students.name = 'Elliot Dickinson'
GROUP BY students.name;