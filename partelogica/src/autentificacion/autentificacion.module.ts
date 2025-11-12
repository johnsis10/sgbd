import { Module } from '@nestjs/common';
import { AutentificacionService } from './autentificacion.service';
import { AutentificacionController } from './autentificacion.controller';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/jwt/jwt.strategy';

@Module({
  imports: [
    UsuarioModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'clave_secreta_segura',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AutentificacionService, JwtStrategy],
  controllers: [AutentificacionController],
  exports: [AutentificacionService],
})
export class AutentificacionModule {}
