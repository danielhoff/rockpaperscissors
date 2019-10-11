import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameStartComponent } from './game-start/game-start.component';
import { GameMainComponent } from './game-main/game-main.component';
import { GameResultsComponent } from './game-results/game-results.component';

@NgModule({
  declarations: [
    AppComponent,
    GameStartComponent,
    GameMainComponent,
    GameResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
