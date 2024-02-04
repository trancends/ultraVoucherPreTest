--- asuming that there are two tables, children and parents
SELECT c.id,c.name,p.parent_name 
FROM children c
LEFT JOIN parents p
ON c.parent_id = p.id
