
export const requiredValidator = (field: string) => (value: string) => {
  if (value !== '') {
    return '';
  } else {
    return `${field} is required`;
  }
}