import { Module } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroController } from './libro.controller';
import { LibroController } from './libro.controller';
import { LibroService } from './libro.service';

@Module({
  providers: [LibroService],
  controllers: [LibroController]
})
export class LibroModule {}
