import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123qwe',
      database: 'sgbd',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuarioModule,
    AutentificacionModule,
  ],
})
export class AppModule {}
