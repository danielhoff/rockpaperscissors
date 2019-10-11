import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameStartComponent } from './game-start/game-start.component';
import { GameMainComponent } from './game-main/game-main.component';
import { GameResultsComponent } from './game-results/game-results.component';


const routes: Routes = [
  { path: '', component: GameStartComponent },
  { path: 'game', component: GameMainComponent },
  { path: 'results', component: GameResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
