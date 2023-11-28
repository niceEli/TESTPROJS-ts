export function ThisFuncWorks() {
  console.log("this works");
}

export function nienTenTwentiWon(nien: number, Ten: number) {
  const TwentiWon: number = nien + Ten + 2;
  console.log(nien + " + " + Ten + " = " + TwentiWon);
  return TwentiWon;
}

export function canaTax(price: number) {
  const total = ((Math.round((price * 1.13) * 100)) / 100);
  console.log("Total is: " + total);
  return total;
}

export function canaTaxTip(price: number, Tip: number) {
  const taxedPrice = ((Math.round((price * 1.13) * 100)) / 100);
  const tip = (Math.round((price * (Tip / 100) * 100)) / 100);
  const total = taxedPrice + tip;
  console.log("Total is: " + total);
  return total;
}

export function interested(price: number, Percent: number) {
  const total = ((Math.round(price * (1 + (Percent / 100)) * 100)) / 100);
  const amnt = total - price;
  console.log("Amount added: " + amnt);
  console.log("Total is: " + total);
  return total;
}
