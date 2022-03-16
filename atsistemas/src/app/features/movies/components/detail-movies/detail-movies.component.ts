import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable, of, Subscription } from 'rxjs';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-detail-movies',
  templateUrl: './detail-movies.component.html',
  styleUrls: ['./detail-movies.component.css']
})
export class DetailMoviesComponent implements OnInit {
  paramsSubscription: Subscription;
  editMode: boolean;
  titulo: any;
  formulario: FormGroup;
  formularioSubscription: Subscription;
  datosDocumento$: Observable<any>;
  insertando = false;
  disabled = false;
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
              private fb: FormBuilder,
              public translate: TranslateService,
              private movieService: MoviesService) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      duration: [null],
      actors: this.fb.array(this.actorsArray.map((actor) => {

      })),
      namesActors: this.fb.array(this.actorsArray.map((actor) => {

      })),
      genre: this.fb.array(this.genreArray.map((actor) => {

      })),
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

  }

  getDatos = (id: number) => {
    this.datosDocumento$ = (id) ? this.movieService.getMovieId(+id) : of(id);
    forkJoin({
      datosDocumento: this.datosDocumento$
      // listaDestinatarios: this.datosDestinatarios$,
    }).pipe().subscribe( datos => {
      console.log('getDatos ', datos);
    });
  }

  submit(): void {}

}
