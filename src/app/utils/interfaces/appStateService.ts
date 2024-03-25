import { Player } from "./player";

export interface IAppStateService {
    squares: number[][];
    xIsNext: boolean;
    winner: Player | null;
    playerTurn: Player;
    newGame: () => void;
}