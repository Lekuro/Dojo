function dec2binStr(dec) {
    var val = dec;
    var result = ''
    if (dec < 0) {
        result = '-0b';
        //result += (-dec ^ 0).toString(2)
        val = -dec
    } else {
        result = '0b';
        //result += (dec ^ 0).toString(2)
    }
    var power = 128;
    while (power / 2 != .25) {
        if (val >= power) {
            result += '1';
            val -= power;
        } else {
            result += 0;
        }
        power /= 2;
    }
    console.log('dec2binStr() data:', dec, 'result', result)
    return result
}
//console.log('dec2binStr')
console.log(dec2binStr(117))
console.log(dec2binStr(13))
console.log(dec2binStr(6))
console.log(dec2binStr(25))
console.log(dec2binStr(8))
console.log(dec2binStr(45))
console.log(dec2binStr(10))
console.log(dec2binStr(-9))
console.log(dec2binStr(64))
console.log(dec2binStr(255))
console.log(dec2binStr(128))
console.log(dec2binStr(35))
console.log(dec2binStr(0))
console.log(dec2binStr(198))
console.log(dec2binStr(12345678))
console.log('---------------------------------------------------')