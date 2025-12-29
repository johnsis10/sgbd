import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../jwt/jwt.strategy';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';
import { UsuarioModule } from '../usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || '123qwe',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AutentificacionService, JwtStrategy],
  controllers: [AutentificacionController],
  exports: [JwtModule],
})
export class AutentificacionModule {}
