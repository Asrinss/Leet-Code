/**
 * @param {string[]} operations
 * @return {number}
 */
function finalValueAfterOperations(operations) {
    let X = 0;  // Start with X at 0
    
    for (let i = 0; i < operations.length; i++) {
        let currentOperation = operations[i];
        
        // Birleştirilmiş if'ler
        if (currentOperation == "++X" || currentOperation == "X++") {
            X = X + 1;
        }
        if (currentOperation == "--X" || currentOperation == "X--") {
            X = X - 1;
        }
    }
    
    return X;
}

// Test cases
let test1 = ["--X", "X++", "X++"];
let test2 = ["++X", "++X", "X++"];
let test3 = ["X++", "++X", "--X", "X--"];

console.log(finalValueAfterOperations(test1));  // Output: 1
console.log(finalValueAfterOperations(test2));  // Output: 3
console.log(finalValueAfterOperations(test3));  // Output: 0