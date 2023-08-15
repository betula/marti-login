import { Validator } from './validator.type';

export const combineValidators = (validators?: Validator[]) => {
  if (!validators || validators.length === 0) {
    return () => '';
  }

  return (value: string) => {
    for (const validator of validators) {
      const error = validator(value);
      if (error) return error;
    }
    return '';
  }
}