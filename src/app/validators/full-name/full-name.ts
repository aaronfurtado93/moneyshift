import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class FullName {
  static validator: ValidatorFn = (c: AbstractControl): ValidationErrors | null => {
    if (/^\w+\s\w+$/.test(c.value)) {
      return null;
    }
    return {
      InvalidFullName: new Error('Invalid Full Name')
    };
  }
}
