import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity('categoria')
export class Categoria {
  @PrimaryGeneratedColumn({ name: 'id_categoria' })
  id: number;

  @Column({ name: 'nombre_categoria', length: 100, unique: true })
  nombreCategoria: string;

  @Column({ type: 'text', nullable: true })
  descripcion: string;

  @OneToMany(() => Libro, libro => libro.categoria)
  libros: Libro[];
}