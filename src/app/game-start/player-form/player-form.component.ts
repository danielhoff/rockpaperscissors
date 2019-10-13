import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
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
export class PlayerFormComponent implements OnInit {

  gameLogic: Observable<GameLogic>;
  name: string;

  constructor(private store: Store<GameLogicState>, private router: Router) {
    this.gameLogic = this.store.select('gameLogic');
  }

  editName() { // function to update the player name
    this.store.dispatch(new GameLogicActions.PlayerName(this.name));

    // navigate to the main game page
    this.router.navigateByUrl('/game');
  }

}
