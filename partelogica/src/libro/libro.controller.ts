import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { LibroService } from './libro.service';
import { Libro } from './libro.entity';
import { CreateLibroDto } from './dto/crear.libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('Libros')
@Controller('api/v1/libro')
export class LibroController {
  constructor(private readonly libroServicio: LibroService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los libros' })
  @ApiResponse({ status: 200, description: 'Lista de todos los libros' })
  obtenerTodos(): Promise<Libro[]> {
    return this.libroServicio.obtenerTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un libro por ID' })
  @ApiResponse({ status: 200, description: 'Libro encontrado por ID' })
  @ApiResponse({ status: 404, description: 'Libro no encontrado' })
  obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<Libro> {
    return this.libroServicio.obtenerPorId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo libro' })
  @ApiBody({ type: CreateLibroDto })
  @ApiResponse({ status: 201, description: 'Libro creado exitosamente' })
  crear(@Body() datos: CreateLibroDto): Promise<Libro> {
    return this.libroServicio.crear(datos);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modificar un libro existente' })
  @ApiBody({ type: UpdateLibroDto })
  @ApiResponse({ status: 200, description: 'Libro modificado exitosamente' })
  @ApiResponse({ status: 404, description: 'Libro no encontrado' })
  modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() datos: UpdateLibroDto,
  ): Promise<Libro> {
    return this.libroServicio.modificar(id, datos);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un libro por ID' })
  @ApiResponse({ status: 200, description: 'Libro eliminado exitosamente' })
  @ApiResponse({ status: 404, description: 'Libro no encontrado' })
  borrar(@Param('id', ParseIntPipe) id: number): Promise<{ mensaje: string }> {
    return this.libroServicio.borrar(id);
  }
}
