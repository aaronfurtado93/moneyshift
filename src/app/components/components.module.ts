import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPlayerModule} from './new-player/new-player.module';
import {PlayerModule} from './player/player.module';

@NgModule({
  imports: [
    CommonModule,
    NewPlayerModule,
    PlayerModule
  ],
  exports: [
    NewPlayerModule,
    PlayerModule
  ]
})
export class ComponentsModule { }
