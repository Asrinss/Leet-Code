/**
 * @param {string} s
 * @return {number}
 */


var scoreOfString = function(s) {
    
    let score= 0;
    for(let i= 0; i< s.length - 1; i++){
        let diff = Math.abs(s[i].charCodeAt(0) - s[i+1].charCodeAt(0));
        score +=diff;
    }
    return score;
}

console.log(scoreOfString("hello"));
console.log(scoreOfString("zaz"));  
