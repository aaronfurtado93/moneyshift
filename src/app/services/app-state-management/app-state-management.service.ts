import { Injectable } from '@angular/core';
import {SessionStorageItems} from './session-storage/session-storage-items';
import {SessionStorageService} from './session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AppStateManagementService {

  SS = SessionStorageItems;

  constructor(
    private sessionStorageService: SessionStorageService
  ) {
    const _SS = {...this.SS};

    for (const key in _SS) {
      if (_SS[key]) {
        this.sessionStorageService.get$(key)
          .subscribe(value => this.SS[`_$${key}`] = value);

        Object.defineProperty(this.SS, key, {
          get: () => this.SS[`_$${key}`],
          set: value => {
            this.sessionStorageService.set(key, value)
              .then();
          }
        });
      }
    }
  }
}
