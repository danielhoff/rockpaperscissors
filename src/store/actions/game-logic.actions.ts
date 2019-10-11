import { Action } from '@ngrx/store';

export const PLAYER_SUBMIT = '[GameLogic] PlayerSubmit';
export const COMP_SUBMIT = '[GameLogic] CompSubmit';
export const PLAYER_SCORE = '[GameLogic] PlayerScore';
export const COMP_SCORE = '[GameLogic] CompScore';
export const NEXT_ROUND = '[GameLogic] NextRound';

export class PlayerSubmit implements Action {
  readonly type = PLAYER_SUBMIT;

  constructor( public payload: number ) {}

}

export class PlayerScore implements Action {
  readonly type = PLAYER_SCORE;
}

export class CompSubmit implements Action {
  readonly type = COMP_SUBMIT;

  constructor( public payload: number ) {}

}

export class CompScore implements Action {
  readonly type = COMP_SCORE;
}

export class NextRound implements Action {
  readonly type = NEXT_ROUND;
}

export type All
  = PlayerSubmit
  | CompSubmit
  | PlayerScore
  | CompScore
  | NextRound;
