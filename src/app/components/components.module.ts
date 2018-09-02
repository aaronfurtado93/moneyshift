import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPlayerModule} from './new-player/new-player.module';

@NgModule({
  imports: [
    CommonModule,
    NewPlayerModule
  ],
  exports: [
    NewPlayerModule
  ]
})
export class ComponentsModule { }
