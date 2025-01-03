type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
    let temp = [];
    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i))
            temp.push(arr[i]);
    }
    return temp;
};
