// Sample Strings
/*Given a string, return true or false depending on whether that string has balanced parentheses.

For the purposes of this problem, you only need to worry about parentheses ( and ), not other opening-and-closing marks, like curly brackets, square brackets, or angle brackets.

For example:

let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:
*/
function checkParens(string){
    let strArr = string.split('')
    let openCount = 0;
    let closeCount = 0;
    for(let i = 0; i < strArr.length; i++){
        if (strArr[i] === "(") {
            openCount += 1;
            console.log(`open count is ${openCount}`)
        } else if (strArr[i] === ")"){
                closeCount+=1;
                console.log(`closeCount is ${closeCount}`)
        }}
        if(closeCount === openCount){
            return true
        } else {
            return false
        }
    }


    function checkParens2(string){
        let strArr = string.split('');
        let parenArr = [];
        for(let i = 0; i < strArr.length; i++){
            if (strArr[i] === "("){
                parenArr.push(strArr[i])
                }
            else if (strArr[i] === ")"){
                if(parenArr[parenArr.length-1] === "("){
                    parenArr.pop
                } else {
                    parenArr.push(strArr[i])
                }
            }
            }
            if (parenArr.length === 0){
                return true
            } else {
                return false
            }
        }
    
        console.log(checkParens2("This (is () also ) unbalanced"))