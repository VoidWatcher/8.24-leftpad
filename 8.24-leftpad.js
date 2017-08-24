function leftpad (str, len, ch) {
    if (!ch && ch !== 0) 
        ch = ' ';
    var len = len - str.length,
        total = '';
    while (len) {
        (len & 1) && (total += ch)
        ch += ch;
        len = len >> 1;

    }
    return total + str;

}

console.log(leftpad('hello', 20, '1'));