import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Libro } from './libro.entity';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { Autor } from 'src/autor/autor.entity';
import { Categoria } from 'src/categoria/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Libro, Autor, Categoria])],
  providers: [LibroService],
  controllers: [LibroController],
})
export class LibroModule {}