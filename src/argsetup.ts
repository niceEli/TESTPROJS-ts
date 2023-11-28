export function argSetup() {
  //this script is poggers and also gives me args from java or c#
  console.log("Seting Up Arguments");
  let args: Array<any> = process.argv;
  args.splice(0, 2);
  return args;
}
