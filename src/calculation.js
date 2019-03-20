export const MLperNOK = (volume, percentage, price) =>
  ((volume * (percentage / 100)) / price).toFixed(2);

export const KRperML = (volume, percentage, price) =>
  (price / ((volume * percentage) / 100)).toFixed(2);

// TODO: Implement asTubis

export const tubis = {
  name: 'Tuborg Grønn',
  price: 26.9,
  price_sek: 28.92,
  price_per_liter: 53.8,
  SEKperML: KRperML(500, 5.5, 28.92),
  alcohol: 4.5
};
