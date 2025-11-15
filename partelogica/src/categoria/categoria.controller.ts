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

@Controller('api/v1/categoria')
export class CategoriaController {
  constructor(private readonly categoriaServicio: CategoriaService) {}

  @Get()
  obtenerTodas() {
    return this.categoriaServicio.obtenerTodas();
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaServicio.obtenerPorId(id);
  }

  @Post()
  crear(@Body() datos: Partial<Categoria>) {
    return this.categoriaServicio.crear(datos);
  }

  @Put(':id')
  modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Categoria>) {
    return this.categoriaServicio.modificar(id, datos);
  }

  @Delete(':id')
  borrar(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaServicio.borrar(id);
  }
}