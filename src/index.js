module.exports = function check(str, bracketsConfig) {
    if (str.length%2 === 1) {
        return false;
    } else {
        let stack = [];
        let brackets = {};

        for (let i = 0; i < bracketsConfig.length; i++){
            brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
        }

        const openings = Object.keys(brackets);
        const strArray = str.split('');
        stack.push(strArray[0]);

        for (let k = 1; k <= strArray.length; k++){
            let currentChar = strArray[k];
            let equalChar = brackets[strArray[k]];
            let lastCharOfStack = brackets[stack[stack.length - 1]]
            if(currentChar === equalChar && currentChar !== equalChar || currentChar === lastCharOfStack) {
                stack.pop();
            } else if (openings.includes(currentChar)) {
                stack.push(currentChar);
            } else {
                return false;
            }
        }

        return stack.length === 0;
    }
}