import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class UpdateCategoriaDto {
  @ApiPropertyOptional({
    example: 'Realismo mágico',
    description: 'Nombre de la categoría',
  })
  @IsString()
  @IsOptional()
  nombre_categoria?: string;

  @ApiPropertyOptional({
    example: 'Mezcla lo fantástico con lo cotidiano',
    description: 'Descripción de la categoría',
  })
  @IsString()
  @IsOptional()
  descripcion?: string;
}
