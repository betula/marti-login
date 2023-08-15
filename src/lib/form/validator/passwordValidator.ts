import { hasLowercase } from "../../checker/hasLowercase";
import { hasNumber } from "../../checker/hasNumber";
import { hasSymbol } from "../../checker/hasSymbol";
import { hasUppercase } from "../../checker/hasUppercase";
import { combineValidators } from "../combine-validators";
import { minLengthValidator } from "./minLengthValidator";

export const MinLength = 8;

export const passwordValidator = (field = 'Password') => {
  const lengthValidator = minLengthValidator(field, MinLength);
  const charactersValidator = (value: string) => {
    if (!hasLowercase(value)) {
      return `${field} should contain at least one lowercase letter`
    }
    if (!hasUppercase(value)) {
      return `${field} should contain at least one uppercase letter`
    }
    if (!hasNumber(value) && !hasSymbol(value)) {
      return `${field} should contain at least one number or symbol`
    }
    return '';
  }

  return combineValidators([
    lengthValidator,
    charactersValidator
  ])
}