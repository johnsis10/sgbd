import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { LibroModule } from './libro/libro.module';
import { Autor } from './autor/autor.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123qwe',
      database: 'sgbd',
      schema: 'public',
      autoLoadEntities: true,
      synchronize: false,
    }),
    UsuarioModule,
    AutentificacionModule,
    CategoriaModule,
    LibroModule,
    Autor
  ],
})
export class AppModule {}
