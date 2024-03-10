import { Component } from '@angular/core';
import { AppStateService } from '../shared/appState.service';
import { Player } from '../shared/interfaces';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrl: './backdrop.component.css'
})

export class BackdropComponent {
  
  constructor (
    private appStateService: AppStateService
  ) {}

  public get winner(): Player | null { return this.appStateService.winner; }

  public get newGame(): void { return this.appStateService.newGame(); }
}
