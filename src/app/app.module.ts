import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { GamesComponent } from './games/games.component';
import { AppsComponent } from './apps/apps.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { KnappeKoppenComponent } from './pages/apps/knappe-koppe/knappe-koppe.component';
import { AnimalChainComponent } from './pages/games/animal-chain/animal-chain.component';
import { AnimalGuesserComponent } from './pages/games/animal-guesser/animal-guesser.component';
import { TwentyThreePlusOneComponent } from './pages/apps/twenty-three-plus-one/twenty-three-plus-one.component';
import { IntroComponent } from './pages/games/animal-chain/intro/intro.component';
import { GameComponent } from './pages/games/animal-chain/game/game.component';
import { AddAnimalComponent } from './pages/games/animal-chain/add-animal/add-animal.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    GamesComponent,
    AppsComponent,
    AboutComponent,
    NavbarComponent,
    KnappeKoppenComponent,
    AnimalChainComponent,
    AnimalGuesserComponent,
    TwentyThreePlusOneComponent,
    IntroComponent,
    GameComponent,
    AddAnimalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,   
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient] 
        }
      })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
