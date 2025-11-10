import { Test, TestingModule } from '@nestjs/testing';
import { HistorialprestamoController } from './historialprestamo.controller';

describe('HistorialprestamoController', () => {
  let controller: HistorialprestamoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HistorialprestamoController],
    }).compile();

    controller = module.get<HistorialprestamoController>(HistorialprestamoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
