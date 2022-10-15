SELECT name, year
  FROM movies
  WHERE year = 1992;

--
SELECT COUNT(*)
  FROM movies
  WHERE year = 1982;

--
SELECT *
  FROM actors
  WHERE last_name LIKE '%stack%';

--
SELECT first_name, last_name, COUNT(*) as total
  FROM actors
  GROUP BY LOWER(first_name), LOWER(last_name)
  ORDER BY total DESC
  LIMIT 10;

--
SELECT a.first_name, a.last_name, COUNT(*) as total
FROM actors as a
join roles as r
on a.id = r.actor_id
GROUP BY a.id
ORDER BY total DESC
LIMIT 100;

--
SELECT genre, COUNT (*) as total
FROM movies_genres
GROUP BY genre
ORDER BY total;

--
SELECT a.first_name, a.last_name
FROM actors as a
JOIN roles as r on a.id = r.actor_id
JOIN movies as m on r.movie_id = m.id
WHERE m.name = 'Braveheart' and m.year = 1995
ORDER BY a.last_name, a.first_name;

--
SELECT d.first_name, d.last_name, m.name, m.year
FROM directors as d
JOIN movies_directors as md on d.id = md.director_id
JOIN movies as m on m.id = md.movie_id
JOIN movies_genres as mg on m.id = mg.movie_id
WHERE mg.genre = 'Film-Noir' and m.year % 4 = 0
ORDER BY m.name;

--
SELECT a.first_name, a.last_name
FROM actors as a
JOIN roles as r on r.actor_id = a.id
JOIN movies as m on m.id = r.movie_id
JOIN movies_genres as mg on mg.movie_id = m.id
WHERE mg.genre = 'Drama' and m.id IN (
  SELECT r.movie_id
  FROM roles as r
  JOIN actors as a on r.actor_id = a.id
  WHERE first_name = 'Kevin' and last_name = 'Bacon'
)
and (a.first_name || ' ' || a.last_name != 'Kevin Bacon');

--
SELECT * FROM actors 
WHERE id in (
  SELECT r.actor_id
  FROM roles as r
  JOIN movies as m on r.movie_id = m.id
  WHERE m.year < 1900
)and
id in (
  SELECT r.actor_id
  FROM roles as r
  JOIN movies as m on m.movie_id = m.id
  WHERE m.year > 2000
);

--
SELECT a.first_name, a.last_name, COUNT(DISTINCT(r.role)) as total
FROM actors as a
JOIN roles as r on a.id = r.actor_id
JOIN movies as m on m.id = r.movie_id
WHERE m.year > 1900
GROUP BY r.movie_id, r.actor_id
HAVING total > 5;


