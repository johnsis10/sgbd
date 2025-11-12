import { IsEmail, IsString } from 'class-validator';

export class AccesoDto {
  @IsEmail()
  eusuario: string;

  @IsString()
  eclave: string;
}
