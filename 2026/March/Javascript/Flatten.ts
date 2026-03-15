type ArrayValue = any | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<any> {
  let res: Array<any> = [];
  let helper = (value: Array<ArrayValue>): void => {
    for(let v of value){
      if(v instanceof Array<ArrayValue>){
        helper(v);
      } else {
        res.push(v);
      }
    }
  }
  helper(value);
  return res;
}
