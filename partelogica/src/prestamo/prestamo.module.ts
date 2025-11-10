import { Module } from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { PrestamoController } from './prestamo.controller';

@Module({
  providers: [PrestamoService],
  controllers: [PrestamoController]
})
export class PrestamoModule {}
