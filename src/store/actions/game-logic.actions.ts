import { Action } from '@ngrx/store';

export const PLAYER_NAME = '[GameLogic] PlayerName';
export const PLAYER_SUBMIT = '[GameLogic] PlayerSubmit';
export const COMP_SUBMIT = '[GameLogic] CompSubmit';
export const PLAYER_SCORE = '[GameLogic] PlayerScore';
export const COMP_SCORE = '[GameLogic] CompScore';
export const NEXT_ROUND = '[GameLogic] NextRound';
export const UPDATE_RESULT = '[GameLogic] UpdateResult';

export class PlayerName implements Action {
  readonly type = PLAYER_NAME;

  constructor( public payload: string ) {}

}

export class PlayerSubmit implements Action {
  readonly type = PLAYER_SUBMIT;

  constructor( public payload: string ) {}

}

export class CompSubmit implements Action {
  readonly type = COMP_SUBMIT;

  constructor( public payload: string ) {}

}

export class PlayerScore implements Action {
  readonly type = PLAYER_SCORE;
}

export class CompScore implements Action {
  readonly type = COMP_SCORE;
}

export class NextRound implements Action {
  readonly type = NEXT_ROUND;
}

export class UpdateResult implements Action {
  readonly type = UPDATE_RESULT;

  constructor( public payload: string ) {}

}

export type All
  = PlayerName
  |PlayerSubmit
  | CompSubmit
  | PlayerScore
  | CompScore
  | NextRound
  | UpdateResult;
