export type Player = 'X' | 'O';

export interface IAppStateService {
    squares: Player[];
    xIsNext: boolean;
    winner: Player | null;
    playerTurn: Player;
    newGame: () => void;
}