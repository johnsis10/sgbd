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

@Controller('api/v1/libro')
export class LibroController {
  constructor(private readonly libroServicio: LibroService) {}

  @Get()
  obtenerTodos() {
    return this.libroServicio.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.libroServicio.obtenerPorId(id);
  }

  @Post()
  crear(@Body() datos: Partial<Libro>) {
    return this.libroServicio.crear(datos);
  }

  @Put(':id')
  modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Libro>) {
    return this.libroServicio.modificar(id, datos);
  }

  @Delete(':id')
  borrar(@Param('id', ParseIntPipe) id: number) {
    return this.libroServicio.borrar(id);
  }
}