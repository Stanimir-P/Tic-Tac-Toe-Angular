import { Injectable } from '@angular/core';
import { IAppStateService, Player } from './interfaces';

@Injectable({
  providedIn: 'root'
})

export class AppStateService implements IAppStateService {
  private _squares: Player[] = Array(9).fill(null);
  private _xIsNext: boolean = true;
  private _winner: Player | null = null;

  public newGame(): void {
    this._winner = null;
    this._xIsNext = true;
    this._squares = Array(9).fill(null);
  };

  public get squares(): Player[] {
    return this._squares
  }

  public set squares(newValue: Player[]) {
    this._squares = newValue;
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
    return this.xIsNext ? 'X' : 'O';
  }
}
