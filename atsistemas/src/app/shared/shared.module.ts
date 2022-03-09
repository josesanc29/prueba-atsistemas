import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MoviesService } from '../features/movies/services/movies.service';
import { MoviesBackendService } from '../features/movies/services/movies-backend.service';
import { MoviesEndpointService } from '../features/movies/services/movies-endpoint.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';


@NgModule({
  declarations: [
    HeadComponent,
    FooterComponent,
    BreadcrumbComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule,
    AppRoutingModule
  ],
  exports: [
    NgbModule,
    FontAwesomeModule,
    HeadComponent,
    FooterComponent,
    BreadcrumbComponent,
    PageNotFoundComponent
  ],
  providers: [
    MoviesService,
    MoviesBackendService,
    { provide: MoviesEndpointService, useExisting: MoviesBackendService },
  ]
})
export class SharedModule { }
