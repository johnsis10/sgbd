import { Entity} from 'Typeorm';
@ Entity()
export class Usuario {

    @column()
    id:number;
     @column()
    usuario:string;
     @column()
    clave:string;
     @column()
    rol:string;
}
