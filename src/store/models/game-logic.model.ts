// model of the game logic used throughout the app

export interface GameLogic {
  playerName: string; // players name
  round: number; // round number
  playerScore: number; // players score
  compScore: number; // computers score
  playerChoices: Array<string>; // the players choices eg rock paper scissors
  compChoices: Array<string>; // the computers choices eg rock papper scissors
  results: Array<string>; // array of the results win, loss, draw etd
}
