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

  submitScore(choice) { // function called when user chooses RPS
    // hide selection and show results
    this.disabledToggle = true;
    // get the players choice as a string
    this.playerChoice = this.RPS[choice];

    // get computers selection, rand number between 0 and 2, and convert to string
    const computerSelection = Math.floor(Math.random() * Math.floor(3));
    this.computerChoice = this.RPS[computerSelection];

    // add the players and computers choice to their respective arrays
    this.store.dispatch(new GameLogicActions.PlayerSubmit(this.playerChoice));
    this.store.dispatch(new GameLogicActions.CompSubmit(this.computerChoice));

    // find the winner of the round
    this.outcome = this.determineWinner(choice, computerSelection);

  }

  determineWinner(playerChoice, computerChoice) {
    // nice little bit of maths to determine the winner
    // example:
    // when the player picks rock/0
    // and the computer picks scissor/2
    // the player wins -( 0 - 2 + 3) % 3 is equal to 1.
    if (playerChoice === computerChoice) {
      this.store.dispatch(new GameLogicActions.UpdateResult('draw'));
      return 'draw';
    } else if ((playerChoice - computerChoice + 3) % 3 === 1) {
      // updates the players score
      this.store.dispatch(new GameLogicActions.PlayerScore());
      this.store.dispatch(new GameLogicActions.UpdateResult('win'));
      return 'win';
    } else {
      // updates the computers score
      this.store.dispatch(new GameLogicActions.CompScore());
      this.store.dispatch(new GameLogicActions.UpdateResult('loss'));
      return 'loss';
    }

  }

  nextRound() {
    // reset vars for the next round
    this.disabledToggle = false;
    this.outcome = '';
    this.playerChoice = '';
    this.computerChoice = '';

    // update round number
    this.store.dispatch(new GameLogicActions.NextRound());
  }

  ngOnInit() {
    this.RPS = ['rock', 'paper', 'scissors'];
  }

}
