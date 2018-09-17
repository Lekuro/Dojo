function binStr2val(str) {
    //str = (str[0] === '0') ? str.substring(2) : '-'+str.substring(3)
    /*console.log('binStr2val() data:',str,'result',bin2dec(result))
    return bin2dec(result);*/
    var power = 1;
    var value = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        if (i === 0 && str[i] === '-') { value = -value; break; }
        value += power * str[i];
        power *= 2;
    }
    console.log('binStr2val() data:', str, 'result', value)
    return value;
}
console.log(binStr2val('1010101'))
console.log(binStr2val('100111'))
console.log(binStr2val('10100101'))
console.log(binStr2val('111'))
console.log(binStr2val('1111000'))
console.log(binStr2val('110110'))
console.log(binStr2val('000'))
console.log(binStr2val('11'))
console.log(binStr2val('-1010'))
console.log(binStr2val('100110'))
console.log(binStr2val('1010101010'))
console.log(binStr2val('111001'))
console.log(binStr2val('100101'))
console.log(binStr2val('11111111'))
/*console.log(binStr2val('0b1010101'))
console.log(binStr2val('0b100111'))
console.log(binStr2val('0b10100101'))
console.log(binStr2val('0b111'))
console.log(binStr2val('0b1111000'))
console.log(binStr2val('0b110110'))
console.log(binStr2val('0b000'))
console.log(binStr2val('0b11'))
console.log(binStr2val('-0b1010'))
console.log(binStr2val('0b100110'))
console.log(binStr2val('0b1010101010'))
console.log(binStr2val('0b111001'))
console.log(binStr2val('0b100101'))*/
console.log('---------------------------------------------------')