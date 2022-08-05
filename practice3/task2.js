function testString(str) {
    const arr = str.split('');
    let checkArr = [];
    for (const char of arr) {
        switch(char) {
            case "(":
                checkArr.unshift(")");
                break;
            case "[":
                checkArr.unshift("]");
                break;
            case ")":
            case "]":
                if(checkArr.length == 0 || checkArr[0] != char) {
                    return false;
                }
                checkArr.shift();
                break;
        }
    }

    return checkArr.length == 0;
}


console.log(testString("isu([syvstc]ts(crs))cs"));
console.log(testString("isu[(syvstc]ts(crs))cs"));