export interface GameLogic {
  playerName: string;
  round: number;
  playerScore: number;
  compScore: number;
  playerChoices: Array<string>;
  compChoices: Array<string>;
  results: Array<string>;
}
