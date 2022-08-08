function parseDate(str) {
    const reg = /(\d{1,2})\-(\d{1,2})\-(\d{4})/;
    const arr = str.match(reg) || [];

    if (arr) {
        for (let i = arr.length - 1; i >= 0 ; i--) {
            if (arr[i] < 10 && arr[i].length < 2) {
                arr[i] = '0' + arr[i]; 
            }
        }

        return [arr[3], arr[2], arr[1]].join('.');
    }

    return null;
}

function test() {
    console.log(parseDate('25-07-2021')); // 2021.07.25
    console.log(parseDate('25-7-2021')); // 2021.07.25
    console.log(parseDate('1-1-2021')); // 2021.01.01
    console.log(parseDate('2-12-1979')); // 1979.12.02
}

console.log('--- Task 4 ---');

test();
