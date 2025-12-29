import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateLibroDto {
  @ApiProperty({
    example: 'Cien años de soledad',
    description: 'Título del libro',
  })
  @IsString()
  @IsNotEmpty()
  titulo: string;

  @ApiProperty({
    example: 1,
    description: 'ID del autor (clave foránea)',
  })
  @IsInt()
  id_autor: number;

  @ApiProperty({
    example: 3,
    description: 'ID de la categoría (clave foránea)',
  })
  @IsInt()
  id_categoria: number;

  @ApiProperty({
    example: 1967,
    description: 'Año de publicación',
  })
  @IsInt()
  @IsOptional()
  anio_publicacion?: number;

  @ApiProperty({
    example: '9780307474728',
    description: 'ISBN único del libro',
  })
  @IsString()
  @IsNotEmpty()
  isbn: string;

  @ApiProperty({
    example: 'Saga familiar en Macondo con elementos mágicos.',
    description: 'Resumen breve del contenido del libro',
  })
  @IsString()
  @IsOptional()
  resumen?: string;

  @ApiProperty({
    example: 'cien_anos.pdf',
    description: 'Nombre del archivo PDF asociado',
  })
  @IsString()
  @IsOptional()
  archivo_pdf?: string;

  @ApiProperty({
    example: true,
    description: 'Disponibilidad del libro en la biblioteca',
  })
  @IsBoolean()
  @IsOptional()
  disponible?: boolean;
}
