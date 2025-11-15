import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepo: Repository<Libro>,
  ) {}

  async obtenerTodos() {
    return this.libroRepo.find({ relations: ['autor', 'categoria'] });
  }

  async obtenerPorId(id: number) {
    const libro = await this.libroRepo.findOne({ where: { id }, relations: ['autor', 'categoria'] });
    if (!libro) throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    return libro;
  }

  async crear(datos: Partial<Libro>) {
    const nuevo = this.libroRepo.create(datos);
    return this.libroRepo.save(nuevo);
  }

  async modificar(id: number, datos: Partial<Libro>) {
    const libro = await this.libroRepo.findOne({ where: { id } });
    if (!libro) throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    Object.assign(libro, datos);
    return this.libroRepo.save(libro);
  }

  async borrar(id: number) {
    const resultado = await this.libroRepo.delete(id);
    if (resultado.affected === 0) throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    return { mensaje: `Libro con ID ${id} borrado correctamente` };
  }
}
