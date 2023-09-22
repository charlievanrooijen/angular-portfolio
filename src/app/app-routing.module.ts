import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { GamesComponent } from './games/games.component';
import { AppsComponent } from './apps/apps.component';
import { AboutComponent } from './about/about.component';

import { TwentyThreePlusOneComponent } from './pages/apps/twenty-three-plus-one/twenty-three-plus-one.component';
import { KnappeKoppenComponent } from './pages/apps/knappe-koppe/knappe-koppe.component';
import { AnimalChainComponent } from './pages/games/animal-chain/animal-chain.component';
import { AnimalGuesserComponent } from './pages/games/animal-guesser/animal-guesser.component';
import { IntroComponent } from './pages/games/animal-chain/intro/intro.component';
import { GameComponent } from './pages/games/animal-chain/game/game.component';
import { AddAnimalComponent } from './pages/games/animal-chain/add-animal/add-animal.component';

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
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
