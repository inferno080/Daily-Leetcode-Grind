// Time: O(min(m-1,n-1)) and O(1) Space - OPTIMAL

function uniquePaths(m: number, n: number): number {
    // Total possible moves = m-1 right moves + n-1 down moves = m + n -2
    // We need to calculate C(m+n-2, m-1) or C(m+n-2, n-1) i.e. "CHOOSE m-1 from m+n-2" OR "CHOOSE n-1 from m+n-2"
    // Note that nCr or C(n,r)  = n! / r!(n-r)!
    //  C(m+n-2, m-1) = C(m+n-2, n-1) = (m+n-2)! / (m-1)!(n-1)! 
    //  = (m+n-2)(m+n-3)....(m+n-n)....(m-1)! / (m-1)(m-2)...(2(1)* (n-1)(n-2)....(2)(1)
    // Cancel out (m-1)! from numerator and denominator
    // Use the smaller of (m-1) or (n-1) for efficiency
    let numeratorSteps = m - 1;
    let denominatorSteps = n - 1;
    
    if (numeratorSteps > denominatorSteps) {
        [numeratorSteps, denominatorSteps] = [denominatorSteps, numeratorSteps];
    }
    
    let result = 1;
    
    // Calculate C(m+n-2, numeratorSteps) incrementally
    // Multiply and divide step by step to keep numbers manageable
    for (let i = 0; i < numeratorSteps; i++) {
        result *= (m + n - 2 - i);
        result /= (i + 1);
    }
    
    return Math.round(result);
}
