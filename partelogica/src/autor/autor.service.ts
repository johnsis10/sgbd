import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Autor } from './autor.entity';

@Injectable()
export class AutorService {
  constructor(
    @InjectRepository(Autor)
    private readonly autorRepo: Repository<Autor>,
  ) {}

  async obtenerTodos(): Promise<Autor[]> {
    return this.autorRepo.find({ relations: ['libros'] });
  }

  async obtenerPorId(id: number): Promise<Autor> {
    const autor = await this.autorRepo.findOne({
      where: { id_autor: id }, // 👈 corregido
      relations: ['libros'],
    });
    if (!autor) throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    return autor;
  }

  async crear(datos: Partial<Autor>): Promise<Autor> {
    const nuevo = this.autorRepo.create(datos);
    return this.autorRepo.save(nuevo);
  }

  async modificar(id: number, datos: Partial<Autor>): Promise<Autor> {
    const autor = await this.autorRepo.findOne({ where: { id_autor: id } }); 
    if (!autor) throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    Object.assign(autor, datos);
    return this.autorRepo.save(autor);
  }

  async borrar(id: number): Promise<{ mensaje: string }> {
    const resultado = await this.autorRepo.delete({ id_autor: id }); 
    if (resultado.affected === 0) throw new NotFoundException(`Autor con ID ${id} no encontrado`);
    return { mensaje: `Autor con ID ${id} borrado correctamente` };
  }
}
