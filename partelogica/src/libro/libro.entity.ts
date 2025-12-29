import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Autor } from '../autor/autor.entity';
import { Categoria } from '../categoria/categoria.entity';

@Entity('libro')
export class Libro {
  @PrimaryGeneratedColumn({ name: 'id_libro' })
  id_libro: number;

  @Column({ length: 200 })
  titulo: string;

  @ManyToOne(() => Autor, (autor) => autor.libros, { eager: true })
  @JoinColumn({ name: 'id_autor' })
  autor: Autor;

  @ManyToOne(() => Categoria, (categoria) => categoria.libros, { eager: true })
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @Column({ name: 'anio_publicacion', type: 'int', nullable: true })
  anio_publicacion: number;

  @Column({ length: 20, unique: true })
  isbn: string;

  @Column({ type: 'text', nullable: true })
  resumen: string;

  @Column({ type: 'text', nullable: true })
  archivo_pdf: string;

  @Column({ default: true })
  disponible: boolean;
}
