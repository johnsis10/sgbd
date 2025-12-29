import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { RolService } from './rol.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CrearRolDto } from './dto/crear-rol.dto';
import { Rol } from './rol.entity';

@ApiTags('Rol')
@Controller('api/v1/rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todos los roles' })
  @ApiResponse({ status: 200, description: 'Lista de roles obtenida correctamente.' })
  obtenerTodos(): Promise<Rol[]> {
    return this.rolService.obtenerTodos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un rol por ID' })
  @ApiResponse({ status: 200, description: 'Rol encontrado.' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado.' })
  obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<Rol | null> {
    return this.rolService.obtenerPorId(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo rol' })
  @ApiResponse({ status: 201, description: 'Rol creado correctamente.' })
  crear(@Body() dto: CrearRolDto): Promise<Rol> {
    return this.rolService.crear(dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un rol por ID' })
  @ApiResponse({ status: 200, description: 'Rol eliminado correctamente.' })
  @ApiResponse({ status: 404, description: 'Rol no encontrado.' })
  eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.rolService.eliminar(id);
  }
}
