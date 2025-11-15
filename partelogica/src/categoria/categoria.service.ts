import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepo: Repository<Categoria>,
  ) {}

  async obtenerTodas() {
    return this.categoriaRepo.find({ relations: ['libros'] });
  }

  async obtenerPorId(id: number) {
    const categoria = await this.categoriaRepo.findOne({ where: { id }, relations: ['libros'] });
    if (!categoria) throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    return categoria;
  }

  async crear(datos: Partial<Categoria>) {
    const nueva = this.categoriaRepo.create(datos);
    return this.categoriaRepo.save(nueva);
  }

  async modificar(id: number, datos: Partial<Categoria>) {
    const categoria = await this.categoriaRepo.findOne({ where: { id } });
    if (!categoria) throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    Object.assign(categoria, datos);
    return this.categoriaRepo.save(categoria);
  }

  async borrar(id: number) {
    const resultado = await this.categoriaRepo.delete(id);
    if (resultado.affected === 0) throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    return { mensaje: `Categoría con ID ${id} borrada correctamente` };
  }
}
