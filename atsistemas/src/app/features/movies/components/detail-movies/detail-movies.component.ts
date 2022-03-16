import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.css']
})
export class DetailMoviesComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription;
  editMode: boolean;
  titulo: any;
  formulario: FormGroup;
  formularioSubscription: Subscription;
  datosDocumento$: Observable<any>;
  insertando = false;
  disabled = false;
  idDocumento: number;
  generosSelected = [];
  actoresSelected = [];
  genreArray = [
    {
      id: 1,
      name: 'Male'
    },
    {
      id: 2,
      name: 'Female'
    }
  ];
  actorsArray = [
    {
    id: 1,
    name: 'Isaak McQuode'
    },
    {
      id : 2,
      name : 'Rory Chanders'
    },
    {
      id : 3,
      name : 'Lew Meehan'
    },
    {
      id : 4,
      name : 'Marci Noads'
    },
    {
      id : 5,
      name : 'Jordan Yeskov'
    },
    {
      id : 6,
      name : 'Hale Bangs'
    },
    {
      id : 7,
      name : 'Quint Critcher'
    },
    {
      id : 8,
      name : 'Angela Kaming'
    },
    {
      id : 9,
      name : 'Orson Cud'
    },
    {
      id : 10,
      name : 'Murielle Carvilla'
    }
  ];

  get f(): { [key: string]: AbstractControl } {
    return this.formulario.controls;
    }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              public translate: TranslateService,
              private movieService: MoviesService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      duration: [null],
      actors: this.fb.array([]),
      namesActors: this.fb.array([]),
      genre: this.fb.array([]),
      imdbRating: [null],
      poster: [''],
      title: [''],
      year: [null]
    });

    this.paramsSubscription = this.route.params.subscribe(params => {
      console.log('route params? ', params);
      this.editMode = !!params.id;
      this.insertando = !this.editMode;
      this.getDatos(params.id);
    });

    this.formularioSubscription = this.formulario.valueChanges.subscribe((cambios) => {
      console.log('valueChanges ', cambios);
    });

    this.translate
      .get(this.editMode ? 'Detalle pelicula' : 'Nueva pelicula')
      .subscribe((res: string) => {
        console.log('titulo subscribe ', res);
        this.titulo = res;
      });

  }

  ngOnDestroy(): void {
    if (this.formularioSubscription) { this.formularioSubscription.unsubscribe(); }
    if (this.paramsSubscription) { this.paramsSubscription.unsubscribe(); }
  }

  getDatos = (id: number) => {
    this.datosDocumento$ = (id) ? this.movieService.getMovieId(+id) : of(id);
    forkJoin({
      datosDocumento: this.datosDocumento$
    }).pipe().subscribe( datos => {
      console.log('getDatos ', datos);
      if ( datos.datosDocumento) {
        this.idDocumento = datos.datosDocumento.id;
        this.populateData(datos.datosDocumento);
      }
    });
  }

  submit(): void {
    if (this.formulario.invalid) {
      return;
    }
    // const url = "./"
    if ( !this.editMode ) {
      const documento = this.formModel;
      const formData = new FormData();
      formData.append('file', this.formulario.get('fileSource').value);
      const doc = this.formModel;
      formData.append('doc', JSON.stringify(doc));
      this.movieService.create(formData).subscribe( result => {
        if (result) {
          console.log('RESULT OK ', result);
        }
      });
    } else {
      const documento = this.formModel;
      const formData = new FormData();
      formData.append('file', this.formulario.get('fileSource').value);
      const doc = this.formModel;
      formData.append('doc', JSON.stringify(doc));
    }
  }
  populateData( datos: any ): void {
    console.log('populate datos ', datos);
    if ( datos ) {
      this.formulario.controls.title.setValue(datos.title);
      this.formulario.controls.duration.setValue(datos.duration);
      this.formulario.controls.year.setValue(datos.year);
      this.formulario.controls.imdbRating.setValue(datos.imdbRating);
      this.formulario.controls.actors.setValue(datos.actors);
      this.formulario.controls.genre.setValue(datos.genre);
    }
  }

  private get formModel(): any {
    return {
      duration: this.f.duration.value,
      actors: this.f.actors.value,
      namesActors: [],
      genre: this.f.genre.value,
      imdbRating: this.f.imdbRating.value,
      poster: this.f.poster.value,
      title: this.f.title.value,
      year: this.f.year.value,
    };
  }
}
