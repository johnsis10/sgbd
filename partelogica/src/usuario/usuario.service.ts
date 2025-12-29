import {
  Injectable,
  NotFoundException,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from './usuario.entity';
import { CrearUsuarioDto } from './dto/crear-usuario.dto';
import { ActualizarUsuarioDto } from './dto/actualizar-usuario.dto';
import { CredencialesUsuarioDto } from './dto/credenciales-usuario.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    private readonly jwtService: JwtService,
  ) {}

  async obtenerTodos(): Promise<Usuario[]> {
    return this.usuarioRepository.find({ relations: ['rol'] });
  }

  async obtenerPorId(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { id_usuario: id },
      relations: ['rol'],
    });
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }

  async obtenerPorUsuario(correo: string): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({
      where: { correo },
      relations: ['rol'],
    });
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }
    return usuario;
  }

  async crear(dto: CrearUsuarioDto): Promise<Usuario> {
    try {
      const contrasenaEncriptada = await bcrypt.hash(dto.contrasena, 10);

      const nuevoUsuario = this.usuarioRepository.create({
        nombre: dto.nombre,
        correo: dto.correo,
        contrasena: contrasenaEncriptada,
        rol: { id_rol: dto.rol_id },
      });

      return await this.usuarioRepository.save(nuevoUsuario);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('El correo ya está registrado');
      }
      throw error;
    }
  }

  async actualizar(id: number, dto: ActualizarUsuarioDto): Promise<Usuario> {
    const usuario = await this.obtenerPorId(id);

    if (dto.contrasena) {
      dto.contrasena = await bcrypt.hash(dto.contrasena, 10);
    }

    Object.assign(usuario, dto);

    if (dto.rol_id) {
      usuario.rol = { id_rol: dto.rol_id } as any;
    }

    return this.usuarioRepository.save(usuario);
  }

  async eliminar(id: number): Promise<void> {
    const resultado = await this.usuarioRepository.delete(id);
    if (resultado.affected === 0) {
      throw new NotFoundException('Usuario no encontrado');
    }
  }

  async login(dto: CredencialesUsuarioDto) {
    const usuario = await this.usuarioRepository.findOne({
      where: { correo: dto.correo },
      relations: ['rol'],
    });

    if (!usuario) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const passwordValido = await bcrypt.compare(dto.contrasena, usuario.contrasena);
    if (!passwordValido) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = {
      sub: usuario.id_usuario,
      correo: usuario.correo,
      rol: usuario.rol?.nombre_rol,
    };

    const token = await this.jwtService.signAsync(payload);

    return {
      access_token: token,
      usuario,
    };
  }
}
