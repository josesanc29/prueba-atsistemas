import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    ListActorsComponent
  ],
  imports: [
    CommonModule,
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
  ],
  exports: [
    NgbModule,
    FontAwesomeModule,
    ListActorsComponent,
  ],
  providers: []
})
export class ActorsModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    const pathroot = environment.production ? './assets/i18n/prod' : './assets/i18n/convocatoriaAbierta/documentos/dev';
    return new TranslateHttpLoader(http, pathroot, '.json');
}