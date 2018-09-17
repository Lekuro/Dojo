function dec2octalStr(dec) {
    var val = dec;
    var result = ''
    if (dec < 0) {
        result = '-0o';
        //result += (-dec ^ 0).toString(8)
        val = -dec;
    } else {
        result = '0o';
        //result += (dec ^ 0).toString(8)
    }
    var rem = [];
    while (val) {
        rem.push(val % 8);
        val = val / 8 ^ 0;
    }
    for (var i = rem.length - 1; i >= 0; i--) result += rem[i];
    console.log('dec2octalStr() data:', dec, 'result', result)
    return result
}
//console.log('dec2octalStr')
console.log(dec2octalStr(31))
console.log(dec2octalStr(13))
console.log(dec2octalStr(6))
console.log(dec2octalStr(25))
console.log(dec2octalStr(8))
console.log(dec2octalStr(45))
console.log(dec2octalStr(10))
console.log(dec2octalStr(-9))
console.log(dec2octalStr(64))
console.log(dec2octalStr(255))
console.log('---------------------------------------------------')