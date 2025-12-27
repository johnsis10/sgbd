import { IsString } from 'class-validator';

export class AccesoDto {
  @IsString()
  usuario: string;

  @IsString()
  clave: string;
}