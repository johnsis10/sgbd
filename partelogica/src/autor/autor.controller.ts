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
import { AutorService } from './autor.service';
import { Autor } from './autor.entity';

@Controller('api/v1/autor')
export class AutorController {
  constructor(private readonly autorServicio: AutorService) {}

  @Get()
  obtenerTodos() {
    return this.autorServicio.obtenerTodos();
  }

  @Get(':id')
  obtenerPorId(@Param('id', ParseIntPipe) id: number) {
    return this.autorServicio.obtenerPorId(id);
  }

  @Post()
  crear(@Body() datos: Partial<Autor>) {
    return this.autorServicio.crear(datos);
  }

  @Put(':id')
  modificar(@Param('id', ParseIntPipe) id: number, @Body() datos: Partial<Autor>) {
    return this.autorServicio.modificar(id, datos);
  }

  @Delete(':id')
  borrar(@Param('id', ParseIntPipe) id: number) {
    return this.autorServicio.borrar(id);
  }
}
