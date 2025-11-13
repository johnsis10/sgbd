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
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../jwt/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('Punto de Acceso usuario')
@Controller('api/v1/usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioServicio: UsuarioService,
  ) {}

  @Get()
  obtenerTodos() {
    return this.usuarioServicio.obtenerTodos();
  }
}
