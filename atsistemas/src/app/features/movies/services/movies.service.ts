import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviesEndpointService } from './movies-endpoint.service';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private endpoint: MoviesEndpointService) { }

  // tslint:disable-next-line:typedef
  getListMovies(){
    return this.endpoint.getListMovies();
  }
  search(filtro: any = null): Observable<any> {
    return this.endpoint.search(filtro);
  }

  public get(id: number): Observable<any> {
    return this.endpoint.get(id);
  }

}
