import { ApiProperty } from '@nestjs/swagger';

export class CrearUsuarioDto {
  @ApiProperty({ example: 'Juan Pérez', description: 'Nombre completo del usuario' })
  nombre: string;

  @ApiProperty({ example: 'juan@mail.com', description: 'Correo electrónico del usuario' })
  correo: string;

  @ApiProperty({ example: '123456', description: 'Contraseña del usuario' })
  contrasena: string;

  @ApiProperty({ example: 1, description: 'ID del rol asignado al usuario' })
  rol_id: number;
}
