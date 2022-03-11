import { Peliculas } from './peliculas.interface';
export interface Actors{
    id: number;
    birthdate?: string;
    bornCity?: string;
    first_name?: string;
    gender?: string;
    img?: string;
    last_name?: string;
    movies?: Peliculas[];
    rating?: number;
}
