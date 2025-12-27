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

  @Column({ name: 'anio_publicacion', type: 'int', nullable: true })
  anioPublicacion: number;

  @Column({ length: 20, unique: true })
  isbn: string;

  @Column({ type: 'text', nullable: true })
  resumen: string;

  @Column({ type: 'text', nullable: true })
  archivo_pdf: string;

  @Column({ default: true })
  disponible: boolean;
}