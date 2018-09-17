function findBottle() {
    for (var i = 1; i < 15000000; i++) {
        var strBin = dec2bin(i);
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
function countSetBits(str) {
    var count=0;
    for(var i=0;i<str.length;i++){
        if(str[i]==='1')count++;
    }
    //console.log('count1() data:',str,'result',count)
    return count;
}
function dec2bin(dec) {
    //console.log('dec2bin() data:',dec,'result',(dec^0).toString(2))
    return (dec^0).toString(2);
}