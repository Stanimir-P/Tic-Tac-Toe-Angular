import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../services/appState.service';
import { calculateWinner } from '../utils/calculateWinner';
import { Player } from '../utils/interfaces';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
})

export class GameBoardComponent implements OnInit {
 
  constructor (
    private appStateService: AppStateService
  ) {}

  ngOnInit(): void {
   this.newGame;
  }

  public makeMove(rowIndex: number, columnIndex: number): void {
    if (!this.squares[rowIndex][columnIndex]) {
      this.appStateService.setSquares(rowIndex, columnIndex);

      this.appStateService.xIsNext = !this.xIsNext;
    }
  
    this.appStateService.winner = calculateWinner(this.squares);
  }

  public getPlayerValue(value: number): Player | null {
    if (value === 1) {
      return Player.X;
    } else if (value === -1) {
      return Player.O;
    } else {
      return null;
    }
  }

  public get squares(): number[][] { return this.appStateService.squares; }

  public get xIsNext(): boolean { return this.appStateService.xIsNext; }

  public get winner(): Player | null { return this.appStateService.winner; }

  public get playerTurn(): Player { return this.appStateService.playerTurn; }

  public get newGame(): void { return this.appStateService.newGame(); }
}
