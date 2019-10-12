import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { GameLogic } from '../../../store/models/game-logic.model';
import * as GameLogicActions from '../../../store/actions/game-logic.actions';


interface GameLogicState {
  gameLogic: GameLogic;
}

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {

  gameLogic: Observable<GameLogic>;
  name: string;

  constructor(private store: Store<GameLogicState>) {
    this.gameLogic = this.store.select('gameLogic');
  }

  editName() {
    this.store.dispatch(new GameLogicActions.PlayerName(this.name));
  }

}
