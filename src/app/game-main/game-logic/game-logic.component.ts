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
  outcome: string;
  RPS: Array<string>;

  constructor(private store: Store<GameLogicState>) {
    this.gameLogic = this.store.select('gameLogic');
  }

  submitScore(choice) {
    this.playerChoice = this.RPS[choice];

    const computerSelection = Math.floor(Math.random() * Math.floor(3));
    this.computerChoice = this.computerSelect(computerSelection);

    this.store.dispatch(new GameLogicActions.PlayerSubmit(choice));

    this.outcome = this.determineWinner(choice, computerSelection);
  }

  computerSelect(choice) {
    this.store.dispatch(new GameLogicActions.CompSubmit(choice));
    return this.RPS[choice];
  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      this.store.dispatch(new GameLogicActions.PlayerScore());
      this.store.dispatch(new GameLogicActions.CompScore());
      return 'draw';
    } else if ((playerChoice - computerChoice + 3) % 3 === 1) {
      this.store.dispatch(new GameLogicActions.PlayerScore());
      return 'win';
    } else {
      this.store.dispatch(new GameLogicActions.CompScore());
      return 'loss';
    }

  }

  ngOnInit() {
    this.RPS = ['rock', 'paper', 'scissors'];
  }

}
