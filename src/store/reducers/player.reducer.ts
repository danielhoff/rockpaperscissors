import * as PlayerActions from '../actions/player.actions';
import { Player } from '../models/player.model';

export  type Action = PlayerActions.All;

const defaultState: Player = {
  name: 'Default name',
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function PlayerReducer(state: Player = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case PlayerActions.EDIT_NAME:
      return newState(state, { name: action.payload} );

    default:
      return state;
  }
}

