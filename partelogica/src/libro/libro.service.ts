import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Libro } from './libro.entity';
import { CreateLibroDto } from './dto/crear.libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(Libro)
    private readonly libroRepo: Repository<Libro>,
  ) {}

  async obtenerTodos(): Promise<Libro[]> {
    
    return this.libroRepo.find({ relations: ['autor', 'categoria'] });
  }

  async obtenerPorId(id: number): Promise<Libro> {
    const libro = await this.libroRepo.findOne({
      where: { id_libro: id },
      relations: ['autor', 'categoria'],
    });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return libro;
  }

  async crear(dto: CreateLibroDto): Promise<Libro> {
    const nuevoLibro = this.libroRepo.create({
      titulo: dto.titulo,
      autor: { id_autor: dto.id_autor } as any,
      categoria: { id_categoria: dto.id_categoria } as any,
      anio_publicacion: dto.anio_publicacion,
      isbn: dto.isbn,
      resumen: dto.resumen,
      archivo_pdf: dto.archivo_pdf,
      disponible: dto.disponible ?? true,
    });

    return this.libroRepo.save(nuevoLibro);
  }

  async modificar(id: number, dto: UpdateLibroDto): Promise<Libro> {
    const libro = await this.libroRepo.findOne({ where: { id_libro: id } });
    if (!libro) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }

    
    if (dto.titulo !== undefined) libro.titulo = dto.titulo;
    if (dto.id_autor !== undefined) libro.autor = { id_autor: dto.id_autor } as any;
    if (dto.id_categoria !== undefined) libro.categoria = { id_categoria: dto.id_categoria } as any;
    if (dto.anio_publicacion !== undefined) libro.anio_publicacion = dto.anio_publicacion;
    if (dto.isbn !== undefined) libro.isbn = dto.isbn;
    if (dto.resumen !== undefined) libro.resumen = dto.resumen;
    if (dto.archivo_pdf !== undefined) libro.archivo_pdf = dto.archivo_pdf;
    if (dto.disponible !== undefined) libro.disponible = dto.disponible;

    return this.libroRepo.save(libro);
  }

  async borrar(id: number): Promise<{ mensaje: string }> {
    const resultado = await this.libroRepo.delete({ id_libro: id });
    if (resultado.affected === 0) {
      throw new NotFoundException(`Libro con ID ${id} no encontrado`);
    }
    return { mensaje: `Libro con ID ${id} borrado correctamente` };
  }
}
