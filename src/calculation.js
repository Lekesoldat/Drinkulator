export const MLperNOK = (volume, percentage, price) => volume * (percentage/100) / price;
export const NOKperML = (volume, percentage, price) => price / (volume * percentage/100);
export const tubis = {
  name: "Tuborg Grønn",
  price: 26.90,
  price_per_liter: 53.80,
  alcohol: 4.5,
}