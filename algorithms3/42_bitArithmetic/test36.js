function findBottle() {
    for (var i = 0; i < 256; i++) {
        var strBin = dec2binStr(i);
        var amout1 = countSetBits(strBin)
        //console.log(strBin);
        //console.log(amout1)
        var strDec = '' + i;
        if (amout1 === strDec.length) {
            //console.log(strBin,strDec)
            var bottle = true;
            for (var j = 0; j < strDec.length; j++) {
                var digit = +strDec[j];
                //console.log(digit)
                //if (digit > 8) { bottle = false; break; }
                if (j > 0) {
                    for (ii = j-1; ii >= 0; ii--) {
                        if(digit <= strDec[ii]) { bottle = false; break; }
                    }
                }
                if (strBin[digit - 1] !== '1'| !bottle) { bottle = false; break; }
            }
            if (bottle) console.log('bottle:', strBin, strDec)
        }
    }
}
findBottle()
console.log('---------------------------------------------------')
function dec2binStr(dec) {
    var val =(dec < 0) ?-dec: dec;
    var result = ''
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
    //console.log('dec2binStr() data:', dec, 'result', result)
    return result
}
function countSetBits(str) {
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==='1')count++;
    }
    //console.log('count1() data:',str,'result',count)
    return count;
}