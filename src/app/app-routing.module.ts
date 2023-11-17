import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { GamesComponent } from './pages/games/games.component';
import { AppsComponent } from './pages/apps/apps.component';
import { AboutComponent } from './pages/about/about.component';

import { TwentyThreePlusOneComponent } from './components/apps/twenty-three-plus-one/twenty-three-plus-one.component';
import { KnappeKoppenComponent } from './components/apps/knappe-koppe/knappe-koppe.component';
import { ThreejsAppComponent } from './components/apps/threejs-app/threejs-app.component';
import { AnimalChainComponent } from './components/games/animal-chain/animal-chain.component';
import { AnimalGuesserComponent } from './components/games/animal-guesser/animal-guesser.component';
import { IntroComponent } from './components/games/animal-chain/intro/intro.component';
import { GameComponent } from './components/games/animal-chain/game/game.component';
import { AddAnimalComponent } from './components/games/animal-chain/add-animal/add-animal.component';
import { GasPriceCalculatorComponent } from './components/apps/gas-price-calculator/gas-price-calculator.component';


const routes: Routes = [
  { path: '', component: LandingpageComponent },

  { path: 'games', component: GamesComponent },
  { path: 'games/animal-chain', component: AnimalChainComponent, children: [
    { path: '', redirectTo: 'intro', pathMatch: 'full' },
    { path: 'intro', component: IntroComponent },
    { path: 'game', component: GameComponent },
    { path: 'add-animal', component: AddAnimalComponent },
  ]},
  
  { path: 'games/animal-guesser', component: AnimalGuesserComponent },

  { path: 'apps', component: AppsComponent }, 
  { path: 'apps/23plusone', component: TwentyThreePlusOneComponent },
  { path: 'apps/knappe-koppe', component: KnappeKoppenComponent },
  { path: 'apps/threejs', component: ThreejsAppComponent },
  { path: 'apps/gas-price-calculator', component: GasPriceCalculatorComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
