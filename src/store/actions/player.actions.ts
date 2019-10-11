import { Action } from '@ngrx/store';

export const EDIT_NAME = '[Player] Edit';

export class EditName implements Action {
  readonly type = EDIT_NAME;

  constructor( public payload: string ) {}

}

export type All
  = EditName;
