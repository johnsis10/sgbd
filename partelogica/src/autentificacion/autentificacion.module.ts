import { Module } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';

@Module({
  providers: [AutentificacionService],
  controllers: [AutentificacionController]
})
export class AutentificacionModule {}
