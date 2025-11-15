import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Libro } from '../libro/libro.entity';

@Entity('autor')
export class Autor {
  @PrimaryGeneratedColumn({ name: 'id_autor' })
  id: number;

  @Column({ name: 'nombre_completo', length: 150 })
  nombreCompleto: string;

  @Column({ length: 50, nullable: true })
  nacionalidad: string;

  @Column({ name: 'fecha_nacimiento', type: 'date', nullable: true })
  fechaNacimiento: Date;

  @OneToMany(() => Libro, libro => libro.autor)
  libros: Libro[];
}