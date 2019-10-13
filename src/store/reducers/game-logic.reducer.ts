import * as GameLogicActions from '../actions/game-logic.actions';
import { GameLogic } from '../models/game-logic.model';

export  type Action = GameLogicActions.All;


// default state when the app is first loaded
const defaultState: GameLogic = {
  playerName: 'John Doe',
  round: 1,
  playerScore: 0,
  compScore: 0,
  playerChoices: [],
  compChoices: [],
  results: [],
};

// used to update the state with new data
const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export function GameLogicReducer(state: GameLogic = defaultState, action: Action) {
  // switch statement for all the diffrent actions
  switch (action.type) {

    case GameLogicActions.PLAYER_NAME: // update player name
      return newState(state, { playerName: action.payload} );
      break;

    case GameLogicActions.PLAYER_SUBMIT: // add the players choice to the array
      return newState(state, { playerChoices: [...state.playerChoices, action.payload]} );
      break;

    case GameLogicActions.COMP_SUBMIT: // add the computers choice to the array
      return newState(state, { compChoices: [...state.compChoices, action.payload]} );
      break;

    case GameLogicActions.PLAYER_SCORE: // update the players score when they win a round
      return (newState(state, {playerScore: state.playerScore + 1}));
      break;

    case GameLogicActions.COMP_SCORE: // update the computers score when they win a round
      return (newState(state, {compScore: state.compScore + 1}));
      break;

    case GameLogicActions.NEXT_ROUND: // update the round number
      return (newState(state, {round: state.round + 1}));
      break;

    case GameLogicActions.UPDATE_RESULT: // add the result of the round to the array
      return newState(state, { results: [...state.results, action.payload]} );
      break;

    default:
      return state;
  }
}
