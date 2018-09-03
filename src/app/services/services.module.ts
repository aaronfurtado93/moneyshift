import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppStateManagementModule} from './app-state-management/app-state-management.module';

@NgModule({
  imports: [
    CommonModule,
    AppStateManagementModule
  ],
  exports: [
    AppStateManagementModule
  ]
})
export class ServicesModule { }
