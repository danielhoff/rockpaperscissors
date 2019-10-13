import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GameLogic } from '../../../store/models/game-logic.model';

interface GameLogicState {
  gamelogic: GameLogic;
}

@Component({
  selector: 'app-results-main',
  templateUrl: './results-main.component.html',
  styleUrls: ['./results-main.component.scss']
})
export class ResultsMainComponent implements OnInit {

  gameLogic: Observable<GameLogic>;

  constructor(private store: Store<GameLogicState>) {
    this.gameLogic = this.store.select('gameLogic');
  }

  ngOnInit() {

  }

}
