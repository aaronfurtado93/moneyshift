import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import {MaterialsModule} from '../../modules/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule
  ],
  declarations: [
    PlayerComponent
  ],
  entryComponents: [
    PlayerComponent
  ],
  exports: [
    PlayerComponent
  ]
})
export class PlayerModule { }
