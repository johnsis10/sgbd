import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { RolController } from './rol.controller';
import { RolService } from './rol.service';

@Module({
  providers: [RolService],
  controllers: [RolController]
})
export class RolModule {}
