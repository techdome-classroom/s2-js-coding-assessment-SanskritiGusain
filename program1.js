/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    let stack = [];
    

    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
       
        if (map[char]) {
            stack.push(char);
        } else {
        
            let top = stack.pop();
            if (map[top] !== char) {
                return false;
            }
        }
    }
    
   
    return stack.length === 0;
};

module.exports = { isValid };
