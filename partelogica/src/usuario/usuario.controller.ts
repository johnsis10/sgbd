import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/jwt/JwtAuthGuard';

@UseGuards(JwtAuthGuard)
@ApiTags('Punto de Acceso usuario')
@Controller('api/v1/usuario')
export class UsuarioController {
@Controller('usuario')

  constructor(
        private readonly usuarioServicio: UsuarioService,
    ) { }

    @Get()
    obtenerTodos() {
        return this.usuarioServicio.obtenerTodos();
    }
}
