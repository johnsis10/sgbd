PGPASSWORD="5068121Ca*" dropdb -h localhost -p 5432 -U postgres sgbd
PGPASSWORD="5068121Ca*" createdb -h localhost -p 5432 -U postgres sgbd
PGPASSWORD="5068121Ca*" psql -h localhost -p 5432 -U postgres -d sgbd -f tablas.sql
PGPASSWORD="5068121Ca*" psql -h localhost -p 5432 -U postgres -d sgbd -f datos.sql