import { Test, TestingModule } from '@nestjs/testing';
import { HistorialprestamoService } from './historialprestamo.service';

describe('HistorialprestamoService', () => {
  let service: HistorialprestamoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HistorialprestamoService],
    }).compile();

    service = module.get<HistorialprestamoService>(HistorialprestamoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
