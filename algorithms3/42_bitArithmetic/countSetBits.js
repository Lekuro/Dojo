function countSetBits(val) {
    var count=0;
    var str=(val^0).toString(2);
    for(var i=0;i<str.length;i++){
        if(str[i]==='1')count++;
    }
    console.log('countSetBits() data:',val,'result',count)
    return count;
}
console.log(countSetBits(1023))
console.log(countSetBits('0x3ff'))
console.log(countSetBits(8192))
console.log(countSetBits('0x2000'))
console.log('---------------------------------------------------')