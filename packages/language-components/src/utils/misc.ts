export const arrayify = (value: unknown) =>
  Array.isArray(value) ? value : [value];
