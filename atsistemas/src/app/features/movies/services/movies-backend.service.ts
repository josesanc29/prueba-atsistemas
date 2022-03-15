import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { Peliculas } from '../models/peliculas.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesBackendService {
  apiBase = environment.apiUrl;
  constructor(
    public loadingService: LoadingService,
    public translate: TranslateService,
    public http: HttpClient,
  ) {}

  getListMoviesData(): Observable<any> {
    const url = `${this.apiBase}/movies`;
    return this.http.get(url).pipe(map((response: any) => {
      return response;
    }),
    catchError((error: HttpErrorResponse) => {
      return of(error);
    })
    );
  }

  getListActorsData(): Observable<any> {
    const url = `${this.apiBase}/actors`;
    return this.http.get(url).pipe(map((response) => {
      return response;
    }),
    catchError((error: HttpErrorResponse) => {
      return of(error);
    })
    );
  }

  getListCompaniesData(): Observable<any> {
    const url = `${this.apiBase}/companies`;
    return this.http.get(url).pipe(map((response) => {
      return response;
    }),
    catchError((error: HttpErrorResponse) => {
      return of(error);
    })
    );
  }

  get(id: number): Observable<any> {
    return;
  }

}
