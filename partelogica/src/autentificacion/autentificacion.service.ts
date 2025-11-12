import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutentificacionService {
  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {}

  async validarUsuario(eusuario: string, eclave: string) {
    const usuario = await this.usuarioService.obtenerPorUsuario(eusuario);
    if (usuario && await bcrypt.compare(eclave, usuario.contrasena)) {
      const { contrasena, ...result } = usuario;
      return result;
    }
    throw new UnauthorizedException('Credenciales inválidas');
  }

  async acceso(usuario: any) {
    const payload = {
      username: usuario.correo,
      sub: usuario.id_usuario,
      rol: usuario.rol?.nombre_rol || 'Usuario',
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
