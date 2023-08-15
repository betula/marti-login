import { computed, effect, signal } from 'react-signals-app';
import { FormControl } from './FormControl';
import { Validator } from './validator.type';

export type GroupOptions = {
  [key: string]: Validator[];
}
export type Group<T extends GroupOptions> = {
  [P in keyof T]: FormControl;
}
export type Value<T extends GroupOptions> = {
  [P in keyof T]: string;
}

export type GroupValidator<T extends GroupOptions> = (value: Value<T>) => string;

type MapString = { [key: string]: string; }
type MapFormControl = { [key: string]: FormControl; }

export class FormGroupControl<T extends GroupOptions> {
  private _validator?: GroupValidator<T>;

  fields: Group<T>;

  @signal
  error = '';

  @computed
  get hasError() {
    if (this.error.length > 0) {
      return true;
    }

    return Object.keys(this.fields).some((key) => (
      this.fields[key].hasError
    ));
  }

  @computed
  get value() {
    const data: MapString = {};
    Object.keys(this.fields).forEach((key) => {
      data[key] = this.fields[key].value;
    });

    return data as Value<T>;
  }

  constructor(options: T, validator?: GroupValidator<T>) {
    const group: MapFormControl = {};
    Object.keys(options).forEach((key) => {
      group[key] = new FormControl(...options[key]);
    });

    this.fields = group as Group<T>;
    this._validator = validator;

    if (this._validator) {
      effect(() => {
        if (this.error) {
          this.error = this._validator!(this.value);
        }
      });
    }
  }

  validate() {
    Object.keys(this.fields).forEach((key) => (
      this.fields[key].validate()
    ));
    if (this._validator) {
      this.error = this._validator(this.value);
    }
  }

  reset() {
    Object.keys(this.fields).forEach((key) => (
      this.fields[key].reset()
    ));
    this.error = '';
  }
}