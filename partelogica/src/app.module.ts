import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { RolModule } from './rol/rol.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [UsuarioModule, RolModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
