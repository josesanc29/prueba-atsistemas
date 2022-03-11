import { Actors } from './actores.interface';

export interface Peliculas {
    id: number;
    duration?: number;
    actors: Actors[];
    genre: string[];
    imdbRating?: number;
    poster?: string;
    title?: string;
    year?: number;
}
