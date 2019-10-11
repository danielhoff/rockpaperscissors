export interface GameLogic {
  round: number;
  playerScore: number;
  compScore: number;
  playerChoices: Array<number>;
  compChoices: Array<number>;
}
