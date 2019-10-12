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
  disabledToggle: boolean;

  constructor(private store: Store<GameLogicState>) {
    this.gameLogic = this.store.select('gameLogic');
  }

  submitScore(choice) {
    this.disabledToggle = true;
    this.playerChoice = this.RPS[choice];

    const computerSelection = Math.floor(Math.random() * Math.floor(3));
    this.computerChoice = this.RPS[computerSelection];

    this.store.dispatch(new GameLogicActions.PlayerSubmit(this.playerChoice));
    this.store.dispatch(new GameLogicActions.CompSubmit(this.computerChoice));

    this.outcome = this.determineWinner(choice, computerSelection);

  }

  determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      this.store.dispatch(new GameLogicActions.UpdateResult('draw'));
      return 'draw';
    } else if ((playerChoice - computerChoice + 3) % 3 === 1) {
      this.store.dispatch(new GameLogicActions.PlayerScore());
      this.store.dispatch(new GameLogicActions.UpdateResult('win'));
      return 'win';
    } else {
      this.store.dispatch(new GameLogicActions.CompScore());
      this.store.dispatch(new GameLogicActions.UpdateResult('loss'));
      return 'loss';
    }

  }

  nextRound() {
    this.disabledToggle = false;
    this.outcome = '';
    this.playerChoice = '';
    this.computerChoice = '';
    this.store.dispatch(new GameLogicActions.NextRound());
  }

  ngOnInit() {
    this.RPS = ['rock', 'paper', 'scissors'];
  }

}
