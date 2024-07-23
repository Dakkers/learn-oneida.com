export * from "./pronouns";
export * from "./translation";
export * from "./words";

export const arrayify = (value: unknown) =>
  Array.isArray(value) ? value : [value];
