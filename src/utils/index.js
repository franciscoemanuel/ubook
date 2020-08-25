export const clone = obj => (typeof obj === 'object' && !!obj ? JSON.parse(JSON.stringify(obj)) : obj);

export const randomColor = () => {
  const colors = ['#fa8d68', '#90d26c', '#68a0fa', '#fab668', '#8368fa', '#fa68b5', '#5fe2c4', '#f55a5a'];
  const colorRandomIndex = colors[Math.floor(Math.random() * colors.length)];
  return colorRandomIndex;
};

export const rgbToHex = rgb => {
  let sep = rgb.indexOf(',') > -1 ? ',' : ' ';
  rgb = rgb
    .substr(4)
    .split(')')[0]
    .split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1) r = '0' + r;
  if (g.length == 1) g = '0' + g;
  if (b.length == 1) b = '0' + b;

  return `#${r}${g}${b}`;
};
