function parseNames(str) {
    const reg = /[^(, )|^\n]+/g;
    const arr = str.match(reg) || [];
    let newStr = '';
    for (let i = 0; i < arr.length; i += 2) {
        newStr += arr[i + 1] + ', ' + arr[i];
        if (i < arr.length - 2) {
            newStr += '\n';
        }
    }

    return newStr;
}

console.log('--- Task 5 ---');

console.log(parseNames("Lennon, John\nMcCartney, Paul\nHarrison, George\nStar, Ringo"));