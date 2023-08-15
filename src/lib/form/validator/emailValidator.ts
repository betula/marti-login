import isEmail from 'validator/es/lib/isEmail';

export const emailValidator = (field = 'Email') => (value: string) => {
  if (isEmail(value)) {
    return '';
  } else {
    return `${field} has incorrect format`;
  }
}