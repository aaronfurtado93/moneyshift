import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankTransferComponent } from './bank-transfer.component';
import {MaterialsModule} from '../../modules/materials/materials.module';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    PipesModule,
    MaterialsModule
  ],
  declarations: [
    BankTransferComponent
  ],
  entryComponents: [
    BankTransferComponent
  ],
  exports: [
    BankTransferComponent
  ]
})
export class BankTransferModule { }
