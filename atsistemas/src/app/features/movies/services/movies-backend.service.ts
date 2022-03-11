import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

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
    return this.http.get(url).pipe(map((response) => {
      console.log('response service ', response);
      return response;
    }),
    catchError((error: HttpErrorResponse) => {
      console.log('catchError ', error);
      return of(error);
    })
    );
  }

  get(id: number): Observable<any> {
    return;
  }

}
