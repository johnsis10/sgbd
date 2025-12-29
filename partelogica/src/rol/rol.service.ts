import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './rol.entity';
import { Repository } from 'typeorm';
import { CrearRolDto } from './dto/crear-rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private rolRepository: Repository<Rol>,
  ) {}

  async obtenerTodos(): Promise<Rol[]> {
    return this.rolRepository.find({ relations: ['usuarios'] });
  }

  async obtenerPorId(id: number): Promise<Rol | null> {
    return this.rolRepository.findOne({
      where: { id_rol: id },
      relations: ['usuarios'],
    });
  }

  async crear(dto: CrearRolDto): Promise<Rol> {
    const nuevoRol = this.rolRepository.create(dto);
    return this.rolRepository.save(nuevoRol);
  }

  async eliminar(id: number): Promise<void> {
    await this.rolRepository.delete(id);
  }
}
