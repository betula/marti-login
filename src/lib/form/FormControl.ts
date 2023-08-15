import { computed, signal } from 'react-signals-app';
import { Validator } from './validator.type';
import { combineValidators } from './combine-validators';

export class FormControl {
  @signal 
  private _value = '';
  private _validator: Validator

  @signal
  error = '';

  @computed
  get hasError() {
    return this.error.length > 0;
  }
  
  get value() {
    return this._value;
  }
  set value(value: string) {
    this._value = value;

    if (this.error) {
      this.validate();
    }
  }

  setValue = (value: string) => {
    this.value = value;
  }

  constructor(...validators: Validator[]) {
    this._validator = combineValidators(validators);
  }

  validate() {
    this.error = this._validator(this._value);
  }

  reset() {
    this.error = '';
    this._value = '';
  }
}