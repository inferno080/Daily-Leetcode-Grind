// O(n) space and time
function isValid(s: string): boolean {
    let stack : string[] = [];
    for(let x of s) {
        if(x === "(" || x === "{" || x === "[")
            stack.push(x);
        else {
            const top = stack[stack.length - 1];
            if (x === ")") {
                if(top === "(")
                    stack.pop()
                else return false;
            }
            else if (x === "]") {
                if(top === "[")
                    stack.pop()
                else return false;
            }
            else {
                if(top === "{")
                    stack.pop()
                else return false;
            }
        }
    }
    if(stack.length === 0)
        return true;
    else return false;
};
