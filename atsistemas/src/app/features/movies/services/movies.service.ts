import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesBackendService } from './movies-backend.service';




@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private backend: MoviesBackendService) { }

  // tslint:disable-next-line:typedef
  getListMovies(){
    return this.backend.getListMoviesData();
  }

  public get(id: number): Observable<any> {
    return this.backend.get(id);
  }

}
