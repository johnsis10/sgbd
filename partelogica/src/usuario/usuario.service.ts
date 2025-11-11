import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {}

   constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }

    async obtenerTodos() {
        const dato = await this.usuarioRepository.find();
        return dato;
    }


async obtenerPorUsuario(usuario: string) {
    const dato = await this.ususrioRepository.findOne({ where: {usuario }});
    return dato;
}