export default function curry(func: Function): Function {
  return function curried(this:any, ...args: Array<any>) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return curried.bind(this, ...args);
  };
}
