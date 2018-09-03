import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppStateManagementService} from './app-state-management.service';
import {SessionStorageModule} from './session-storage/session-storage.module';

@NgModule({
  imports: [
    CommonModule,
    SessionStorageModule
  ],
  exports: [
    SessionStorageModule
  ],
  providers: [
    AppStateManagementService
  ]
})
export class AppStateManagementModule { }
