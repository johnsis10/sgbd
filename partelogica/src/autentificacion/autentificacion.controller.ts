import { Body, Controller, Post } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AccesoDto } from './dto/acceso.dto';

@Controller('api/v1/autentificacion')
export class AutentificacionController {
  constructor(private readonly autentificacionService: AutentificacionService) {}

  @Post('acceso')
async login(@Body() dto: AccesoDto) {
  const usuarioValido = await this.autentificacionService.validarUsuario(dto.correo, dto.contrasena);
  return this.autentificacionService.acceso(usuarioValido);
}

}
