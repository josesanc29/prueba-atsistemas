import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private translate: TranslateService) {

    this.addLanguages(['es', 'en', 'ca']);
    this.setDefaultLanguage('es');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.langChange.next(event.lang);
    });
  }

  private langChange: BehaviorSubject<string> = new BehaviorSubject<string>('es');

  public get langChange$(): Observable<string> {
    return this.langChange.asObservable();
  }


  public get currentLang(): string {
    return this.langChange.value;
  }

  getTranslation(key: string | Array<string>, interpolateParams?: object): string | any {
    return this.translate.instant(key, interpolateParams);
  }

  getTranslation$(key: string | Array<string>, interpolateParams?: object): Observable<string | any> {
    return this.translate.get(key, interpolateParams);
  }


  useBrowserLanguage(): string | void {
    const browserLang = this.getBrowserLanguage();

    if (browserLang.match(/en|es/)) {
      this.changeLanguage(browserLang);
      return browserLang;
    }
  }

  get languages(): string[] {
    return this.translate.langs;
  }

  private getDefaultLanguage(): string {
    return this.translate.defaultLang;
  }
  private getBrowserLanguage(): string {
    return this.translate.getBrowserLang();
  }

  private changeLanguage(language: string): string {
    if (!language) {
      language = this.getDefaultLanguage();
    }

    if (language !== this.translate.currentLang) {
      setTimeout(() => {
        this.translate.use(language);
        this.langChange.next(language);
      });
    }

    return language;
  }
  private addLanguages(lang: string[]): void {
    this.translate.addLangs(lang);
  }

  private setDefaultLanguage(lang: string): void {
    this.translate.setDefaultLang(lang);
  }
}
