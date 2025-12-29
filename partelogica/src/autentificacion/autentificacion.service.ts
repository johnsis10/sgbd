import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from '../usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutentificacionService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  async validarUsuario(usuario: string, clave: string) {
    const usuarioEncontrado = await this.usuarioService.obtenerPorUsuario(usuario);

    if (!usuarioEncontrado) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const contrasenaValida = await bcrypt.compare(clave, usuarioEncontrado.contrasena);

    if (!contrasenaValida) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const { contrasena, ...resultado } = usuarioEncontrado;
    return resultado;
  }

  async acceso(usuario: any) {
    const payload = {
      sub: usuario.id_usuario, 
      username: usuario.correo, 
      rol: usuario.rol?.nombre_rol || 'LECTOR', 
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
