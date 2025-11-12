import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      synchronize: false, // usa true solo en desarrollo si no tienes tablas creadas
    }),
  ],
})
export class AppModule {}
