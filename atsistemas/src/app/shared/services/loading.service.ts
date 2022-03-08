import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {

  constructor(private spinner: NgxSpinnerService) { }

  simulate(segundos: number): void {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, segundos * 1000);
  }
}
