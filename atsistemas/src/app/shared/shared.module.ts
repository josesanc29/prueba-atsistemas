import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadComponent } from './components/head/head.component';
import { FooterComponent } from './components/footer/footer.component';
// import { APP_ROUTES } from '../app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FeaturesRoutingModule } from '../features/features-routing.module';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    HeadComponent,
    FooterComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    TranslateModule.forRoot({
      isolate: true,
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    }),
    FeaturesRoutingModule
  ],
  exports: [
    NgbModule,
    FontAwesomeModule,
    HeadComponent,
    FooterComponent,
  ],
  providers: []
})
export class SharedModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  const pathroot = environment.production ? './assets/i18n/prod' : './assets/i18n/convocatoriaAbierta/documentos/dev';
  return new TranslateHttpLoader(http, pathroot, '.json');
}
