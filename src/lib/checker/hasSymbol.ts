
export const hasSymbol = (value: string) => {
  return /[-~`!@#$%^&*()_+={[}\]|\\:;"'<,>.?/]/.test(value)
};