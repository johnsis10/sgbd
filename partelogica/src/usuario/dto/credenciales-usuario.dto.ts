import { ApiProperty } from '@nestjs/swagger';

export class CredencialesUsuarioDto {
  @ApiProperty({
    example: 'ana.gomez@example.com',
    description: 'Correo electrónico del usuario',
  })
  correo: string;

  @ApiProperty({
    example: 'ana123',
    description: 'Contraseña del usuario',
  })
  contrasena: string;
}
