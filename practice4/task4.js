function parseDate(str) {
    const reg = /([\d{1,2}]+)\-([\d{1,2}]+)\-([\d{4}]+)/;
    if (!reg.test(str)) {
        return false;
    }

    const arr = str.match(reg);
    if ((arr[1] < 0 || arr[1] > 31)
    || (arr[2] < 0 || arr[2] > 12)
    || (arr[3] < 0)) {
        return false;
    }
    
    let obj = {};
    let date = new Date(arr[3], arr[2] - 1, arr[1]);
    if (date.getDate() <= 9) {
        obj.date = '0' + date.getDate();
    }
    else {
        obj.date = date.getDate();
    }
    if (date.getMonth() + 1 <= 9) {
        obj.month = '0' + (date.getMonth() + 1)
    }
    else {
        obj.month = date.getMonth() + 1;
    }
    obj.year = date.getFullYear();

    return +obj.date == +arr[1] 
        && +obj.month == +arr[2] 
        && +obj.year == +arr[3];
}

function test() {
    console.log(parseDate('25-07-2021')); 
    console.log(parseDate('25-7-2021')); 
    console.log(parseDate('07-1-2021')); 
    console.log(parseDate('31-12-1979'));
}

console.log('--- Task 4 ---');

test();
