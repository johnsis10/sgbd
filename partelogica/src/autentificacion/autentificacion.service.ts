import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AutentificacionService {
  constructor(
    private readonly usuarioService: UsuarioService,
    private readonly jwtService: JwtService,
  ) {}

  // Validar credenciales del usuario
  async validarUsuario(usuario: string, clave: string) {
    try {
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
    } catch (error) {
      console.error('Error en validarUsuario:', error);
      throw new UnauthorizedException('Credenciales inválidas');
    }
  }

  // Generar token de acceso
  async acceso(usuario: any) {
    const payload = {
      username: usuario.usuario,
      sub: usuario.id_usuario,
      rol: usuario.rol?.nombre_rol || 'Usuario',
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}