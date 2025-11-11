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