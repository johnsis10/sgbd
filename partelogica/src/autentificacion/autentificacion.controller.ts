import { Body, Controller, Post } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AccesoDto } from './dto/acceso.dto';

@Controller('api/v1/autentificacion')
export class AutentificacionController {
  constructor(private readonly autentificacionService: AutentificacionService) {}

  @Post('acceso')
  async acceso(@Body() datos: AccesoDto) {
    const usuario = await this.autentificacionService.validarUsuario(
      datos.correo,
      datos.contrasena,
    );
    return this.autentificacionService.acceso(usuario);
  }
}
