export const clone = obj => (typeof obj === 'object' && !!obj ? JSON.parse(JSON.stringify(obj)) : obj);
export const numbersOnly = str => str && str.replace(/\D/g, '');
export const randomColor = () => {
  const colors = ['#fa8d68', '#90d26c', '#68a0fa', '#fab668', '#8368fa', '#fa68b5', '#5fe2c4', '#f55a5a'];
  const colorRandomIndex = colors[Math.floor(Math.random() * colors.length)];
  return colorRandomIndex;
};
