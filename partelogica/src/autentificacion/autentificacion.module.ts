import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: 'clave_secreta_segura',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AutentificacionController],

  exports: [JwtModule],
})
export class AutentificacionModule {}
