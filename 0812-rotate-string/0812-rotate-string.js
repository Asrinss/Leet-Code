/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
function rotateString(s, goal) {
    if (s.length === goal.length) {     
        let str = s + s;     
        return str.includes(goal);
    }
    return false;
}