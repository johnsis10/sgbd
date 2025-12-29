import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsInt, IsBoolean, IsOptional } from 'class-validator';

export class UpdateLibroDto {
  @ApiPropertyOptional({
    example: 'Cien años de soledad',
    description: 'Título del libro',
  })
  @IsString()
  @IsOptional()
  titulo?: string;

  @ApiPropertyOptional({
    example: 1,
    description: 'ID del autor (clave foránea)',
  })
  @IsInt()
  @IsOptional()
  id_autor?: number;

  @ApiPropertyOptional({
    example: 3,
    description: 'ID de la categoría (clave foránea)',
  })
  @IsInt()
  @IsOptional()
  id_categoria?: number;

  @ApiPropertyOptional({
    example: 1967,
    description: 'Año de publicación',
  })
  @IsInt()
  @IsOptional()
  anio_publicacion?: number;

  @ApiPropertyOptional({
    example: '9780307474728',
    description: 'ISBN único del libro',
  })
  @IsString()
  @IsOptional()
  isbn?: string;

  @ApiPropertyOptional({
    example: 'Saga familiar en Macondo con elementos mágicos.',
    description: 'Resumen breve del contenido del libro',
  })
  @IsString()
  @IsOptional()
  resumen?: string;

  @ApiPropertyOptional({
    example: 'cien_anos.pdf',
    description: 'Nombre del archivo PDF asociado',
  })
  @IsString()
  @IsOptional()
  archivo_pdf?: string;

  @ApiPropertyOptional({
    example: true,
    description: 'Disponibilidad del libro en la biblioteca',
  })
  @IsBoolean()
  @IsOptional()
  disponible?: boolean;
}
