import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { PlayerReducer } from '../store/reducers/player.reducer';
import { GameLogicReducer } from '../store/reducers/game-logic.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameStartComponent } from './game-start/game-start.component';
import { GameMainComponent } from './game-main/game-main.component';
import { GameResultsComponent } from './game-results/game-results.component';
import { PlayerFormComponent } from './game-start/player-form/player-form.component';
import { GameLogicComponent } from './game-main/game-logic/game-logic.component';

@NgModule({
  declarations: [
    AppComponent,
    GameStartComponent,
    GameMainComponent,
    GameResultsComponent,
    PlayerFormComponent,
    GameLogicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      player : PlayerReducer,
      gameLogic: GameLogicReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
