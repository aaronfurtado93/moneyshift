import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import {MaterialsModule} from '../../modules/materials/materials.module';
import {PlayerModule} from '../player/player.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialsModule,
    PlayerModule
  ],
  declarations: [
    PlayersComponent
  ],
  entryComponents: [
    PlayersComponent
  ],
  exports: [
    PlayersComponent
  ]
})
export class PlayersModule { }
