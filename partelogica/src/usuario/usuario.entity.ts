import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Rol } from 'src/rol/rol.entity';

@Entity({ name: 'usuario', schema: 'public' })

export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre: string;

  @Column({ unique: true })
  correo: string;

  @Column()
  contrasena: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_registro: Date;

  @ManyToOne(() => Rol, rol => rol.usuarios)
  @JoinColumn({ name: 'id_rol' })
  rol: Rol;
}

