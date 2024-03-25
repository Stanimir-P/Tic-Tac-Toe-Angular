import { Injectable } from '@angular/core';
import { IAppStateService, Player } from '../utils/interfaces';

@Injectable({
  providedIn: 'root'
})

export class AppStateService implements IAppStateService {
  private _squares: number[][] = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  
  private _xIsNext: boolean = true;
  private _winner: Player | null = null;

  public newGame(): void {
    this._winner = null;
    this._xIsNext = true;
    this._squares = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
  };

  setSquares(row: number, column: number): void {
    this.squares[row][column] = this.playerTurn === Player.X ? 1 : -1;
  }

  public get squares(): number[][] {
    return this._squares
  }

  public get xIsNext(): boolean {
    return this._xIsNext;
  }

  public set xIsNext(newValue: boolean) {
    this._xIsNext = newValue;
  }
  
  public get winner(): Player | null {
    return this._winner;
  }

  public set winner(newValue: Player | null) {
    this._winner = newValue;
  }

  public get playerTurn(): Player {
    return this.xIsNext ? Player.X : Player.O;
  }
}
