PGPASSWORD="123qwe" dropdb -h localhost -p 5432 -U postgres sgbd
PGPASSWORD="123qwe" createdb -h localhost -p 5432 -U postgres sgbd
PGPASSWORD="123qwe" psql -h localhost -p 5432 -U postgres -d sgbd -f tablas.sql
PGPASSWORD="123qwe" psql -h localhost -p 5432 -U postgres -d sgbd -f datos.sql