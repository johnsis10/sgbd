import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/crear.categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepo: Repository<Categoria>,
  ) {}

  async obtenerTodas(): Promise<Categoria[]> {
    return this.categoriaRepo
      .createQueryBuilder('categoria')
      .leftJoinAndSelect('categoria.libros', 'libro')
      .getMany();
  }

  async obtenerPorId(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepo
      .createQueryBuilder('categoria')
      .leftJoinAndSelect('categoria.libros', 'libro')
      .where('categoria.id_categoria = :id', { id })
      .getOne();

    if (!categoria) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    return categoria;
  }

  async crear(datos: CreateCategoriaDto): Promise<Categoria> {
    const nueva = this.categoriaRepo.create({
      nombre_categoria: datos.nombre_categoria,
      descripcion: datos.descripcion,
    });
    return this.categoriaRepo.save(nueva);
  }

  async modificar(id: number, datos: UpdateCategoriaDto): Promise<Categoria> {
    const categoria = await this.categoriaRepo.findOne({
      where: { id_categoria: id },
    });
    if (!categoria) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }

    if (datos.nombre_categoria !== undefined) {
      categoria.nombre_categoria = datos.nombre_categoria;
    }
    if (datos.descripcion !== undefined) {
      categoria.descripcion = datos.descripcion;
    }

    return this.categoriaRepo.save(categoria);
  }

  async borrar(id: number): Promise<{ mensaje: string }> {
    const resultado = await this.categoriaRepo.delete({ id_categoria: id });
    if (resultado.affected === 0) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    return { mensaje: `Categoría con ID ${id} borrada correctamente` };
  }
}
