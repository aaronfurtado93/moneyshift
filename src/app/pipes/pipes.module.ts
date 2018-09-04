import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PlayerNameModule} from './player-name/player-name.module';

@NgModule({
  imports: [
    CommonModule,
    PlayerNameModule
  ],
  exports: [
    PlayerNameModule
  ]
})
export class PipesModule { }
