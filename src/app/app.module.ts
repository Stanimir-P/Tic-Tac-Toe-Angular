import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackdropComponent } from './backdrop/backdrop.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { SquareComponent } from './game-board/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    SquareComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
