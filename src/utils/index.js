export const clone = obj => (typeof obj === 'object' && !!obj ? JSON.parse(JSON.stringify(obj)) : obj);
export const numbersOnly = str => str && str.replace(/\D/g, '');
