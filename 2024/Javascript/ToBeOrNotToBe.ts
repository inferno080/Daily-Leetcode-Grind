function expect(val: any): ToBeOrNotToBe {
    let obj : ToBeOrNotToBe = {
        toBe : (v) => {
            if(val === v)
                return true;
            else throw new Error("Not Equal");
        },
        notToBe : (v) => {
            if(val !== v)
                return true;
            else throw new Error("Equal");
        }
    };
    return obj;
};
