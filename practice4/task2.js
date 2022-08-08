function wordWithSubstr(str, substr) {
    let reg = new RegExp(`(\\S*${substr}\\S*)`, 'g');
    return str.match(reg) || [];
}

console.log('--- Task 2 ---');
console.log(wordWithSubstr("Ми знаємо, що монохромний колір - це градації сірого", "хром"));