function hexStr2val(str) {
    str = (str[0] === '0') ? str.substring(2) : '-' + str.substring(3)
    /*console.log('hexStr2val() data:',str,'result',hex2dec(result))
    return hex2dec(result);*/
    var power = 1;
    var value = 0;
    var obj = { 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15 };
    var arr0x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    for (var i = str.length - 1; i >= 0; i--) {
        //if (!(str[i] < 9)) console.log(str[i])
        //console.log(power, value, str[i]);
        if (i === 0 && str[i] === '-') { value = -value; break; }
        for (var idx = 0; idx < arr0x.length/*16*/; idx++) {
            if (str[i] === arr0x[idx]) break;
        }
        //console.log(idx)
        value += power * idx;
        power *= 16;
    }
    console.log('hexStr2val() data:', str, 'result', value)
    return value;
}
console.log(hexStr2val('0x1d2'))
console.log(hexStr2val('0x47'))
console.log(hexStr2val('0xdb'))
console.log(hexStr2val('0x5'))
console.log(hexStr2val('0x20c'))
console.log(hexStr2val('0x4f'))
console.log(hexStr2val('0xb2'))
console.log(hexStr2val('0x0'))
console.log(hexStr2val('-0x7e'))
console.log(hexStr2val('0x7e'))
console.log(hexStr2val('0x101'))
console.log('---------------------------------------------------')