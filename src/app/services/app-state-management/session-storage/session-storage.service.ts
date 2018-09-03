import { Injectable } from '@angular/core';
import {IJSONObject} from '../../../interfaces/ijsonobject';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class SessionStorageService {

  private behaviorSubjectDictionary: {[key: string]: BehaviorSubject<string|number|boolean|undefined|null|IJSONObject|IJSONObject[]>};

  constructor() {
    this.behaviorSubjectDictionary = {};
  }

  get(key: string): Promise<string|number|boolean|undefined|null|IJSONObject|IJSONObject[]> {
    return new Promise((resolve, reject) => {
      const serializedJSONValue = sessionStorage.getItem(key);
      let deserializedJSONValue;
      try {
        deserializedJSONValue = JSON.parse(serializedJSONValue);
      } catch (reason) {
        reject(reason);
      }
      resolve(deserializedJSONValue);
    });
  }

  set(key: string, value: string|number|boolean|undefined|null|IJSONObject|IJSONObject[]): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let serializedJSONValue;
      try {
        serializedJSONValue = JSON.stringify(value);
        sessionStorage.setItem(key, serializedJSONValue);
      } catch (reason) {
        reject(reason);
      }
      if (sessionStorage.getItem(key) === serializedJSONValue) {
        this.behaviorSubjectDictionary[key].next(value);
        resolve(true);
      } else {
        reject(new Error(`setting value failed for ${key}`));
      }
    });
  }

  get$(key: string): Observable<string|number|boolean|undefined|null|IJSONObject|IJSONObject[]> {
    const serializedJSONValue = sessionStorage.getItem(key);
    let deserializedJSONValue;
    try {
      deserializedJSONValue = JSON.parse(serializedJSONValue);
      return this.behaviorSubjectDictionary[key] ? this.behaviorSubjectDictionary[key]
        : this.behaviorSubjectDictionary[key]
          = new BehaviorSubject<string|number|boolean|IJSONObject|IJSONObject[]|null|undefined>(deserializedJSONValue || null);
    } catch (reason) {

    }
  }
}
