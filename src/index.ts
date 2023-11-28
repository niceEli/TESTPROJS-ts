import { ThisFuncWorks, nienTenTwentiWon, canaTax, canaTaxTip, interested } from "./testFunc";
import { argSetup } from "./argsetup";

const args = argSetup();

if (args.length === 0) {
  console.log("400: Bad Request. You Need Command Line Arguments")
  process.exit(400)
}


if (args[0] === "fTest") {
  ThisFuncWorks();
} else if (args[0] === "9+10") {
  nienTenTwentiWon(9, 10);
} else if (args[0] === "canaTax") {
  let price: number = args[1];
  canaTax(price);
} else if (args[0] === "canaTaxTip") {
  let price: number = args[1];
  let tip: number = args[2];
  canaTaxTip(price, tip);
} else if (args[0] === "interested") {
  interested(args[1], args[2]);
}
