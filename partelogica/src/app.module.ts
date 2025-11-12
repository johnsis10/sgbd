import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123qwe",
      database: "sgbd",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsuarioModule, AutentificacionModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
