import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
