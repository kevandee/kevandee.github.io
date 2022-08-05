function substrCount(input, needle, offset = 0, length = input.length) {
    const str = input.substr(offset, length);

    return (str.match(new RegExp(needle, 'g'))|| []).length;
}
