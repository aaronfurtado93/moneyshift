import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceComponent } from './dice.component';
import {MaterialsModule} from '../../modules/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule
  ],
  declarations: [
    DiceComponent
  ],
  entryComponents: [
    DiceComponent
  ],
  exports: [
    DiceComponent
  ]
})
export class DiceModule { }
