import { Component, OnInit } from '@angular/core';
import { AppStateService } from '../shared/appState.service';
import { calculateWinner } from '../shared/helperFunctions';
import { Player } from '../shared/interfaces';

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

  public makeMove(positionIndex: number): void {
    if (!this.squares[positionIndex]) {
      this.squares.splice(positionIndex, 1, this.playerTurn);
      this.appStateService.squares = this.squares;

      this.appStateService.xIsNext = !this.xIsNext;
    }
  
    this.appStateService.winner = calculateWinner(this.squares);
  }

  public get squares(): Player[] { return this.appStateService.squares; }

  public get xIsNext(): boolean { return this.appStateService.xIsNext; }

  public get winner(): Player | null { return this.appStateService.winner; }

  public get playerTurn(): Player { return this.appStateService.playerTurn; }

  public get newGame(): void { return this.appStateService.newGame(); }
}
