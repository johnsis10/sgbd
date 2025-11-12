import { Body, Controller, Post } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';

@Controller('api/v1/autentificacion')
export class AutentificacionController {
  constructor(
        private autentificacionService: AutentificacionService
    ) {}

    @Post('acceso')
    async acceso(@Body() datos: {eusuario: string, eclave: string}) {
        const usuario = await this.autentificacionService.validarUsuario(datos.eusuario, datos.eclave);
        return this.autentificacionService.acceso(usuario);
    }
}
