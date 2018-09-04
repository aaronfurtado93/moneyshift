import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerNamePipe } from './player-name.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PlayerNamePipe
  ],
  exports: [
    PlayerNamePipe
  ]
})
export class PlayerNameModule { }
