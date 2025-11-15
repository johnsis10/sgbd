import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { JwtStrategy } from '../jwt/jwt.strategy';

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
  providers: [AutentificacionService, JwtStrategy],
  exports: [JwtModule],
})
export class AutentificacionModule {}
