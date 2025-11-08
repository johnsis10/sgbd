PGPASSWORD=5068121Ca* dropdb -U postgres -h localhost sgbd
PGPASSWORD=5068121Ca* createdb -U postgres -h localhost sgbd
PGPASSWORD=5068121Ca* psql -U postgres -h localhost -d sgbd -f basededatos/tablas.sql
PGPASSWORD=5068121Ca* psql -U postgres -h localhost -d sgbd -f basededatos/datos.sql