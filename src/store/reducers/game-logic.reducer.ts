import * as GameLogicActions from '../actions/game-logic.actions';
import { GameLogic } from '../models/game-logic.model';

export  type Action = GameLogicActions.All;

const defaultState: GameLogic = {
  round: 1,
  playerScore: 0,
  compScore: 0,
  playerChoices: [],
  compChoices: [],
  results: [],
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function GameLogicReducer(state: GameLogic = defaultState, action: Action) {
  console.log(action.type, state);

  switch (action.type) {
    case GameLogicActions.PLAYER_SUBMIT:
      return newState(state, { playerChoices: [...state.playerChoices, action.payload]} );
      break;

    case GameLogicActions.COMP_SUBMIT:
      return newState(state, { compChoices: [...state.compChoices, action.payload]} );
      break;

    case GameLogicActions.PLAYER_SCORE:
      return (newState(state, {playerScore: state.playerScore++}));
      break;

    case GameLogicActions.COMP_SCORE:
      return (newState(state, {compScore: state.compScore++}));
      break;

    case GameLogicActions.NEXT_ROUND:
      return (newState(state, {round: state.round++}));
      break;

    case GameLogicActions.UPDATE_RESULT:
      return newState(state, { results: [...state.compChoices, action.payload]} );
      break;

    default:
      return state;
  }
}
