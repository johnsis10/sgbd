import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { CredencialesUsuarioDto } from './dto/credenciales-usuario.dto'; 
@ApiTags('Usuario')
@ApiBearerAuth('access-token')
@Controller('api/v1/usuario')
export class UsuarioController {
  constructor(private readonly usuarioServicio: UsuarioService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo usuario' })
  @ApiBody({ type: CrearUsuarioDto })
  @ApiResponse({ status: 201, description: 'Usuario creado correctamente.' })
  crear(@Body() dto: CrearUsuarioDto): Promise<Usuario> {
    return this.usuarioServicio.crear(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'Obtener todos los usuarios' })
  @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente.' })
  obtenerTodos(): Promise<Usuario[]> {
    return this.usuarioServicio.obtenerTodos();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'Obtener un usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario encontrado.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  obtenerPorId(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuarioServicio.obtenerPorId(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un usuario existente' })
  @ApiBody({ type: ActualizarUsuarioDto })
  @ApiResponse({ status: 200, description: 'Usuario actualizado correctamente.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: ActualizarUsuarioDto,
  ): Promise<Usuario> {
    return this.usuarioServicio.actualizar(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un usuario por ID' })
  @ApiResponse({ status: 200, description: 'Usuario eliminado correctamente.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  eliminar(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.usuarioServicio.eliminar(id);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login de usuario' })
  @ApiBody({ type: CredencialesUsuarioDto }) 
  @ApiResponse({ status: 200, description: 'Login exitoso, devuelve token JWT.' })
  @ApiResponse({ status: 401, description: 'Credenciales inválidas.' })
  login(@Body() dto: CredencialesUsuarioDto) {
    return this.usuarioServicio.login(dto);
  }
}
