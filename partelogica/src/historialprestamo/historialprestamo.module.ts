import { Module } from '@nestjs/common';
import { HistorialprestamoService } from './historialprestamo.service';
import { HistorialprestamoController } from './historialprestamo.controller';

@Module({
  providers: [HistorialprestamoService],
  controllers: [HistorialprestamoController]
})
export class HistorialprestamoModule {}
