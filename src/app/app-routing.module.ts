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

const routes: Routes = [
  { path: '', component: LandingpageComponent },

  { path: 'games', component: GamesComponent },
  { path: 'games/animal-chain', component: AnimalChainComponent },
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
