import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPlayerComponent } from './new-player.component';
import {MaterialsModule} from '../../modules/materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule
  ],
  declarations: [
    NewPlayerComponent
  ],
  entryComponents: [
    NewPlayerComponent
  ],
  exports: [
    NewPlayerComponent
  ]
})
export class NewPlayerModule { }
