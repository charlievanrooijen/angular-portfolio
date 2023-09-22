import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-portfolio';

  languages: string[] = ['en', 'nl'];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang() || 'en';
    const langToUse = this.languages.includes(browserLang) ? browserLang : 'en';    
    translate.use(langToUse);
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
