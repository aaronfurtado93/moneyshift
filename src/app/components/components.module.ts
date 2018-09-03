import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPlayerModule} from './new-player/new-player.module';
import {PlayerModule} from './player/player.module';
import {PlayersModule} from './players/players.module';

@NgModule({
  imports: [
    CommonModule,
    NewPlayerModule,
    PlayerModule,
    PlayersModule
  ],
  exports: [
    NewPlayerModule,
    PlayerModule,
    PlayersModule
  ]
})
export class ComponentsModule { }
