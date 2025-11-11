<<<<<<< HEAD
--datos
INSERT INTO rol (nombre_rol)
VALUES
('lector'),        -- id_rol = 1
('bibliotecario'), -- id_rol = 2
('admin');         -- id_rol = 3

INSERT INTO usuario (nombre, correo, contrasena, fecha_registro, id_rol)
VALUES
('Ana Gómez', 'ana.gomez@example.com', 'ana123', CURRENT_TIMESTAMP, 1),
('Luis Pérez', 'luis.perez@example.com', 'luis456', CURRENT_TIMESTAMP, 2),
('María Torres', 'maria.torres@example.com', 'maria789', CURRENT_TIMESTAMP, 1),
('Carlos Ruiz', 'carlos.ruiz@example.com', 'carlos321', CURRENT_TIMESTAMP, 3),
('Sofía Vargas', 'sofia.vargas@example.com', 'sofia654', CURRENT_TIMESTAMP, 1);
=======
INSERT INTO rol (id_rol, nombre_rol)
VALUES 
(1, 'Administrador'),
(2, 'Bibliotecario'),
(3, 'Usuario');

INSERT INTO usuario (id_usuario, nombre, correo, contrasena, fecha_registro, id_rol)
VALUES
(6, 'Ana Gómez', 'ana.gomez@example.com', 'ana123', '2025-11-08 00:33:36.957', 1),
(7, 'Luis Pérez', 'luis.perez@example.com', 'luis456', '2025-11-08 00:33:36.957', 2),
(8, 'María Torres', 'maria.torres@example.com', 'maria789', '2025-11-08 00:33:36.957', 1),
(9, 'Carlos Ruiz', 'carlos.ruiz@example.com', 'carlos321', '2025-11-08 00:33:36.957', 3),
(10, 'Sofía Vargas', 'sofia.vargas@example.com', 'sofia654', '2025-11-08 00:33:36.957', 1);

INSERT INTO autor (nombre_completo, nacionalidad, fecha_nacimiento) VALUES
('Gabriel García Márquez', 'Colombiana', '1927-03-06'),
('Isabel Allende', 'Chilena', '1942-08-02'),
('Mario Vargas Llosa', 'Peruana', '1936-03-28'),
('Laura Esquivel', 'Mexicana', '1950-09-30'),
('Jorge Luis Borges', 'Argentina', '1899-08-24');

INSERT INTO categoria (nombre_categoria, descripcion) VALUES
('Novela histórica', 'Narraciones ambientadas en contextos históricos reales'),
('Ciencia ficción', 'Explora futuros posibles y tecnología avanzada'),
('Realismo mágico', 'Mezcla lo fantástico con lo cotidiano'),
('Fantasía', 'Mundos imaginarios con magia y criaturas'),
('Ensayo', 'Textos argumentativos sobre temas diversos');

INSERT INTO libro (titulo, id_autor, id_categoria, año_publicacion, isbn, resumen, archivo_pdf, disponible) VALUES
('Cien años de soledad', 1, 3, 1967, '9780307474728', 'Saga familiar en Macondo con elementos mágicos.', 'cien_anos.pdf', TRUE),
('La casa de los espíritus', 2, 3, 1982, '9780553383805', 'Historia de una familia chilena con tintes sobrenaturales.', 'casa_espiritus.pdf', TRUE),
('La ciudad y los perros', 3, 1, 1963, '9788432208136', 'Crítica a la educación militar en Lima.', 'ciudad_perros.pdf', TRUE),
('Como agua para chocolate', 4, 3, 1989, '9780385474016', 'Romance y cocina en tiempos de revolución.', 'agua_chocolate.pdf', TRUE),
('Ficciones', 5, 5, 1944, '9788420633127', 'Colección de cuentos filosóficos y fantásticos.', 'ficciones.pdf', TRUE);

>>>>>>> 3f45ec38ad19e777d5e61808c7c5b31fe893407f
