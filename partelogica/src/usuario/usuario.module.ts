import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Rol } from '../rol/rol.entity';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario, Rol]),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '123qwe',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UsuarioService],
  controllers: [UsuarioController],
  exports: [UsuarioService],
})
export class UsuarioModule {}
