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
import { CategoriaService } from './categoria.service';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/crear.categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiOperation,
} from '@nestjs/swagger';

@ApiTags('Categorías')
@Controller('api/v1/categoria')
export class CategoriaController {
  constructor(private readonly categoriaServicio: CategoriaService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las categorías' })
  @ApiResponse({ status: 200, description: 'Lista de todas las categorías' })
  obtenerTodas(): Promise<Categoria[]> {
    return this.categoriaServicio.obtenerTodas();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Categoría encontrada por ID' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
  obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaServicio.obtenerPorId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva categoría' })
  @ApiBody({ type: CreateCategoriaDto })
  @ApiResponse({ status: 201, description: 'Categoría creada exitosamente' })
  crear(@Body() datos: CreateCategoriaDto): Promise<Categoria> {
    return this.categoriaServicio.crear(datos);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Modificar una categoría existente' })
  @ApiBody({ type: UpdateCategoriaDto })
  @ApiResponse({ status: 200, description: 'Categoría modificada exitosamente' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
  modificar(
    @Param('id', ParseIntPipe) id: number,
    @Body() datos: UpdateCategoriaDto,
  ): Promise<Categoria> {
    return this.categoriaServicio.modificar(id, datos);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una categoría por ID' })
  @ApiResponse({ status: 200, description: 'Categoría eliminada exitosamente' })
  @ApiResponse({ status: 404, description: 'Categoría no encontrada' })
  borrar(@Param('id', ParseIntPipe) id: number): Promise<{ mensaje: string }> {
    return this.categoriaServicio.borrar(id);
  }
}
