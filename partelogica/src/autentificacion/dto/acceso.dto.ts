import { IsEmail, IsString } from 'class-validator';

export class AccesoDto {

  correo: string;
  contrasena: string;
}
