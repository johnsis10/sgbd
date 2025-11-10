import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';

@Module({
  imports: [UsuarioModule, AutentificacionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
