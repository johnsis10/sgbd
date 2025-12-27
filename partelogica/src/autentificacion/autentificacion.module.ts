import { Module } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsuarioModule,
    JwtModule.register({
      secret: 'clave_secreta', // usa variables de entorno en producción
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AutentificacionService],
  controllers: [AutentificacionController],
  exports: [AutentificacionService],
})
export class AutentificacionModule {}