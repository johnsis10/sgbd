import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
<<<<<<< HEAD
import { RolModule } from './rol/rol.module';
import { RolModule } from './rol/rol.module';

@Module({
  imports: [UsuarioModule, RolModule, AutorModule],
=======
import { AutentificacionModule } from './autentificacion/autentificacion.module';
import { AutorModule } from './autor/autor.module';

@Module({
  imports: [UsuarioModule, AutentificacionModule],
>>>>>>> bc983ba45f51ef3456dfd83b7da3152850f38bb7
  controllers: [],
  providers: [],
})
export class AppModule {}
