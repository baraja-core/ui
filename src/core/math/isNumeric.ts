export const isNumeric = (n: string) => !isNaN(parseFloat(n)) && isFinite(Number(n));
