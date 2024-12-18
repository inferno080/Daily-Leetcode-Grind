// https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    resolve(result);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };
};
