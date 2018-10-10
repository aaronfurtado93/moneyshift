import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewPlayerModule} from './new-player/new-player.module';
import {PlayerModule} from './player/player.module';
import {PlayersModule} from './players/players.module';
import {BankTransferModule} from './bank-transfer/bank-transfer.module';
import {DiceModule} from './dice/dice.module';

@NgModule({
  imports: [
    CommonModule,
    NewPlayerModule,
    PlayerModule,
    PlayersModule,
    BankTransferModule,
    DiceModule
  ],
  exports: [
    NewPlayerModule,
    PlayerModule,
    PlayersModule,
    BankTransferModule,
    DiceModule
  ]
})
export class ComponentsModule { }
