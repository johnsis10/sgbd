import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn({ name: 'id_categoria' })
  id_categoria: number;

  @Column({ length: 100 })
  nombre_categoria: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @OneToMany(() => Libro, (libro) => libro.categoria)
  libros: Libro[];
}
