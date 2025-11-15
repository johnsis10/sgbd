import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Autor } from 'src/autor/autor.entity';
import { Categoria } from 'src/categoria/categoria.entity';

@Entity('libro')
export class Libro {
  @PrimaryGeneratedColumn({ name: 'id_libro' })
  id: number;

  @Column({ length: 200 })
  titulo: string;

  @ManyToOne(() => Autor)
  @JoinColumn({ name: 'id_autor' })
  autor: Autor;

  @ManyToOne(() => Categoria)
  @JoinColumn({ name: 'id_categoria' })
  categoria: Categoria;

  @Column({ name: 'año_publicacion', type: 'int', nullable: true })
  añoPublicacion: number;

  @Column({ length: 20, unique: true })
  isbn: string;

  @Column({ type: 'text', nullable: true })
  resumen: string;

  @Column({ type: 'text', nullable: true })
  archivoPdf: string;

  @Column({ default: true })
  disponible: boolean;
}