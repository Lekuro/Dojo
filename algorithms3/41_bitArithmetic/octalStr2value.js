function octalStr2val(str) {
    str = (str[0] === '0') ? str.substring(2) : '-' + str.substring(3)
    /*console.log('octalStr2val() data:',str,'result',octal2dec(result))
    return octal2dec(result);*/
    var power = 1;
    var value = 0;
    for (var i = str.length - 1; i >= 0; i--) {
        //console.log(power, value, str[i]);
        if (i === 0 && str[i] === '-') { value = -value; break; }
        value += power * str[i];
        power *= 8;
    }
    console.log('octalStr2val() data:', str, 'result', value)
    return value;
}
console.log(octalStr2val('0o47'))
console.log(octalStr2val('0o610'))
console.log(octalStr2val('0o5'))
console.log(octalStr2val('0o26'))
console.log(octalStr2val('0o302'))
console.log(octalStr2val('-0o12'))
console.log(octalStr2val('0o47'))
console.log(octalStr2val('0o101'))
console.log('---------------------------------------------------')