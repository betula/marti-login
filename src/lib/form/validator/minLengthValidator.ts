
export const minLengthValidator = (field: string, min: number) => (value: string) => {
  if (value.length >= min) {
    return '';
  } else {
    return `${field} should be at least ${min} characters`;
  }
}