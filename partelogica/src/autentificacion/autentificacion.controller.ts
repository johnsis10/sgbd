import { Body, Controller, Post } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AccesoDto } from './dto/acceso.dto';

@Controller('api/v1/autentificacion')
export class AutentificacionController {
  constructor(private readonly autentificacionService: AutentificacionService) {}

  @Post('login')
  async login(@Body() datos: AccesoDto) {
    const usuario = await this.autentificacionService.validarUsuario(
      datos.usuario,
      datos.clave,
    );
    return this.autentificacionService.acceso(usuario);
  }
}

