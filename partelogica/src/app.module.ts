import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './usuario/usuario.module';
import { AutentificacionModule } from './autentificacion/autentificacion.module';
import { CategoriaModule } from './categoria/categoria.module';
import { LibroModule } from './libro/libro.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      schema: 'public',
      autoLoadEntities: true,
      synchronize: true,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '123qwe',
      signOptions: { expiresIn: '1h' },
    }),
    UsuarioModule,
    AutentificacionModule,
    CategoriaModule,
    LibroModule,
  ],
})
export class AppModule {}
