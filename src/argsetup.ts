export function argSetup(){
    let args:Array<any> = process.argv;
    args.splice(0, 2);
    return args;
}