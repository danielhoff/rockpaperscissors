import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GameLogic } from '../../../store/models/game-logic.model';
import * as GameLogicActions from '../../../store/actions/game-logic.actions';

interface GameLogicState {
  gamelogic: GameLogic;
}


@Component({
  selector: 'app-game-logic',
  templateUrl: './game-logic.component.html',
  styleUrls: ['./game-logic.component.scss']
})
export class GameLogicComponent implements OnInit {

  gameLogic: Observable<GameLogic>;
  computerChoice: string;
  playerChoice: string;
  RPS: Array<string>;

  constructor(private store: Store<GameLogicState>) {
    this.gameLogic = this.store.select('gameLogic');
  }

  submitScore(choice) {
    this.playerChoice = this.RPS[choice];
    this.computerChoice = this.computerSelect();

    this.store.dispatch(new GameLogicActions.PlayerSubmit(choice));
  }

  computerSelect() {
    const computerSelection = Math.floor(Math.random() * Math.floor(3));

    this.store.dispatch(new GameLogicActions.CompSubmit(computerSelection));
    return this.RPS[computerSelection];
  }

  ngOnInit() {
    this.RPS = ['rock', 'paper', 'scissors'];
  }

}
