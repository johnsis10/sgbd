import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity('autor')
export class Autor {
  @PrimaryGeneratedColumn({ name: 'id_autor' })
  id_autor: number;

  @Column({ length: 150 })
  nombre_completo: string;

  @Column({ length: 100, nullable: true })
  nacionalidad: string;

  @Column({ type: 'date', nullable: true })
  fecha_nacimiento: Date;

  @OneToMany(() => Libro, (libro) => libro.autor)
  libros: Libro[];
}
