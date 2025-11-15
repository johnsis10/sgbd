import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';
import { Usuario } from './usuario/usuario.entity';
import { Autor } from './autor/autor.entity';
import { Libro } from './libro/libro.entity';
import { Categoria } from './categoria/categoria.entity';
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: '123qwe',
      database: 'partelogica',
      entities: [Usuario, Autor, Libro, Categoria],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule,
    AutentificacionModule,
    AutorModule,       
    LibroModule,       
    CategoriaModule,   
  ],
})
export class AppModule {}

