import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class CreateCategoriaDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  nombre_categoria?: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  descripcion?: string;
}
