export const phone = v => !v || (v.length >= 14 && v.length <= 15);
export const notEmptyObject = v => v && Object.values(v).some(v => v);
