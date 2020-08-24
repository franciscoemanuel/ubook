export const phone = v => !v || (v.length >= 14 && v.length <= 15);
export const notAllEmptyProps = props => v => v && Object.keys(v).length && props.some(prop => v[prop]);
