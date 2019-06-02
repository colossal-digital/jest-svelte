export const get = (p = [], o) =>
  p.reduce((xs, x) => (xs && xs.hasOwnProperty(x) ? xs[x] : null), o);