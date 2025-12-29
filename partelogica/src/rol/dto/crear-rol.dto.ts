import { ApiProperty } from '@nestjs/swagger';

export class CrearRolDto {
  @ApiProperty({ example: 'ADMIN', description: 'Nombre del rol' })
  nombre_rol: string;
}
