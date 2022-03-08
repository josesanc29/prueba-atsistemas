import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuComponent } from './components/menu/menu.component';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { MoviesService } from '../features/movies/services/movies.service';
import { MoviesBackendService } from '../features/movies/services/movies-backend.service';
import { MoviesEndpointService } from '../features/movies/services/movies-endpoint.service';


@NgModule({
  declarations: [
    MenuComponent,
    HeadComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule
  ],
  exports: [
    NgbModule,
    FontAwesomeModule,
    MenuComponent,
    HeadComponent,
    FooterComponent,
    BreadcrumbComponent
  ],
  providers: [
    MoviesService,
    MoviesBackendService,
    { provide: MoviesEndpointService, useExisting: MoviesBackendService },
  ]
})
export class SharedModule { }
