import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';


import { Player } from '../../../store/models/player.model';
import * as PlayerActions from '../../../store/actions/player.actions';
import { Observable } from 'rxjs';

interface PlayerFormState {
  form: Player;
}

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.scss']
})
export class PlayerFormComponent {

  form: Observable<Player>;
  name: string;

  constructor(private store: Store<PlayerFormState>) {
    this.form = this.store.select('name');
  }

  editName() {
    console.log(this.name);
    this.store.dispatch(new PlayerActions.EditName(this.name));
  }

}
