function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT') {
    if (fullLen <= input.length) {
        return input;
    }

    let newStr = '';
    const deltaLength = fullLen - input.length;
    for (let i = 0; i < deltaLength; i++) {
        newStr += fillStr;

        if (newStr.length > deltaLength) {
            newStr = newStr.slice(0, deltaLength);
            break;
        }
    }

    switch(fillType) {
        case 'FILL_LEFT':
            newStr += input;
            break;
        case 'FILL_BOTH':
            newStr = newStr.slice(0, Math.floor(deltaLength/2)) + input + newStr.slice(Math.ceil(deltaLength/2));
            break;
        case 'FILL_RIGHT':
            newStr = input + newStr;
            break;
    }

    return newStr;
}

console.log('--- Task 3 ---');
console.log(strPad('star', 10, '_*_')); // star_*__*_
console.log(strPad('star', 8, '_*_', 'FILL_LEFT' )); // _*__star
console.log(strPad('star', 8, '*', 'FILL_BOTH')); // **star**