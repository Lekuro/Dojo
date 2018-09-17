function dec2hexStr(dec) {
    var val=dec
    var result = ''
    if (dec < 0) {
        result = '-0x';
        //result += (-dec ^ 0).toString(16)
        val=-dec;
    } else {
        result = '0x';
        //result += (dec ^ 0).toString(16)
    }
    var arr0x = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var rem = [];
    while (val) {
        rem.push(arr0x[val % 16]);
        val = val / 16 ^ 0;
    }
    for (var i = rem.length - 1; i >= 0; i--) result += rem[i];
    console.log('dec2hexStr() data:', dec, 'result', result)
    return result
}
//console.log('dec2hexStr')
console.log(dec2hexStr(108))
console.log(dec2hexStr(31))
console.log(dec2hexStr(13))
console.log(dec2hexStr(6))
console.log(dec2hexStr(25))
console.log(dec2hexStr(8))
console.log(dec2hexStr(45))
console.log(dec2hexStr(10))
console.log(dec2hexStr(-9))
console.log(dec2hexStr(64))
console.log(dec2hexStr(255))
console.log(dec2hexStr(238))
console.log('---------------------------------------------------')