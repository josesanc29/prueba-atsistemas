import { Peliculas } from './peliculas.interface';

export interface Companies{
    id: number;
    country?: string;
    createYear?: number;
    employees?: number;
    movies?: Peliculas[];
    name?: string;
    rating?: number;
}
