export const valueCheck = (value: string): string => {
  return value.match(/N\/A/g) ? '' : value;
};
