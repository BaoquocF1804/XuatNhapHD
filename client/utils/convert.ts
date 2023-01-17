export function easyReadMoney(x: number) {
  return x.toLocaleString("it-IT", { style: "currency", currency: "VND" });
}
