import { IsEmail, IsString } from 'class-validator';

export class AccesoDto {
  @IsEmail()
  correo: string;

  @IsString()
  contrasena: string;
}
