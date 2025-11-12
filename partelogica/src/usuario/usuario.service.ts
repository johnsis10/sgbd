import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>
  ) {}

  async obtenerTodos() {
    return this.usuarioRepository.find({ relations: ['rol'] });
  }

  async obtenerPorUsuario(correo: string) {
    return this.usuarioRepository.findOne({
      where: { correo },
      relations: ['rol'],
    });
  }
}
