drop schema if exists public cascade;
create schema public;
create extension if not exists pgcrypto with schema public;

CREATE TABLE usuario (
    id_usuario SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(255) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_rol INTEGER REFERENCES rol(id_rol)
);

CREATE TABLE rol (
    id_rol SERIAL PRIMARY KEY,
    nombre_rol VARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE autor (
    id_autor SERIAL PRIMARY KEY,
    nombre_completo VARCHAR(150) NOT NULL,
    nacionalidad VARCHAR(50),
    fecha_nacimiento DATE
);

CREATE TABLE categoria (
    id_categoria SERIAL PRIMARY KEY,
    nombre_categoria VARCHAR(100) UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE libro (
    id_libro SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    id_autor INTEGER REFERENCES autor(id_autor),
    id_categoria INTEGER REFERENCES categoria(id_categoria),
    año_publicacion INTEGER,
    isbn VARCHAR(20) UNIQUE,
    resumen TEXT,
    archivo_pdf TEXT,
    disponible BOOLEAN DEFAULT TRUE
);

CREATE TABLE prestamo (
    id_prestamo SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES usuario(id_usuario),
    id_libro INTEGER REFERENCES libro(id_libro),
    fecha_prestamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_devolucion TIMESTAMP,
    estado VARCHAR(20) CHECK (estado IN ('activo', 'devuelto', 'vencido')) NOT NULL
);

CREATE TABLE historial_prestamo (
    id_historial SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES usuario(id_usuario),
    id_libro INTEGER REFERENCES libro(id_libro),
    fecha_prestamo TIMESTAMP,
    fecha_devolucion TIMESTAMP,
    estado VARCHAR(20) CHECK (estado IN ('devuelto', 'vencido')) NOT NULL
);

CREATE TABLE comentario (
    id_comentario SERIAL PRIMARY KEY,
    id_usuario INTEGER REFERENCES usuario(id_usuario),
    id_libro INTEGER REFERENCES libro(id_libro),
    comentario TEXT NOT NULL,
    fecha_comentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);