import { Module } from '@nestjs/common';
import { AutorService } from './autor.service';
import { AutorController } from './autor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Autor } from './autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Autor])],
  providers: [AutorService],
  controllers: [AutorController]
})
export class AutorModule {}
