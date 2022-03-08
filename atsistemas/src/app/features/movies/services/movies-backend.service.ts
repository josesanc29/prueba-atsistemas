import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { MoviesEndpointService } from './movies-endpoint.service';
import { LoadingService } from 'src/app/shared/services/loading.service';
import { ConfigurationService } from 'src/app/shared/services/configuration.service';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesBackendService extends ApiService implements MoviesEndpointService {

  constructor(
    http: HttpClient,
    loadingService: LoadingService,
    private config: ConfigurationService,
    public translate: TranslateService,
  ) {
    super(http, loadingService, config.data.apisBaseUrl);
  }

  getListMovies(): Observable<any[]> {
    return;
  }

  search(filtro: any): Observable<any> {
    return;
  }

  get(id: number): Observable<any> {
    return;
  }

}
