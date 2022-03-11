import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ListMoviesComponent } from './movies/components/list-movies/list-movies.component';
import { DetailMoviesComponent } from './movies/components/detail-movies/detail-movies.component';
import { ListCompaniesComponent } from './companies/components/list-companies/list-companies.component';
import { ListActorsComponent } from './actors/components/list-actors/list-actors.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


@NgModule({
  declarations: [
    ListMoviesComponent,
    DetailMoviesComponent,
    ListCompaniesComponent,
    ListActorsComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    SharedModule,
    TranslateModule.forChild({
        isolate: true,
        extend: true,
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        }
      })
  ]
})
export class FeaturesModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const pathroot = environment.production ? './assets/i18n/prod' : './assets/i18n/convocatoriaAbierta/documentos/dev';
  return new TranslateHttpLoader(http, pathroot, '.json');
}
