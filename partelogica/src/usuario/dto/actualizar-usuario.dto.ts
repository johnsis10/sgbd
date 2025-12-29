import { ApiPropertyOptional } from '@nestjs/swagger';

export class ActualizarUsuarioDto {
  @ApiPropertyOptional({ example: 'Juan Pérez', description: 'Nombre completo del usuario' })
  nombre?: string;

  @ApiPropertyOptional({ example: 'juan@mail.com', description: 'Correo electrónico del usuario' })
  correo?: string;

  @ApiPropertyOptional({ example: '123456', description: 'Nueva contraseña del usuario' })
  contrasena?: string;

  @ApiPropertyOptional({ example: 2, description: 'Nuevo ID de rol asignado al usuario' })
  rol_id?: number;
}
