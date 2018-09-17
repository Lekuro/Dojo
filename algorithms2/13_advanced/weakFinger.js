function weakFinger(finger, timesCount) {
  console.log(
    "weakFinger() return how far you can count on one hand, continually from finger 1 to 5 then back again. However, one finger is weak and limits the number of times you can use it. You are sent the number of the weak finger, and how many times you can use it. After that, you can neither count on it nor skip it. If you count the sequence 1,2,3,4,5,4,3,2,1,2,3, you would return 11 as number of counts. Given (5,0) return 4, as you would count fingers 1,2,3,4 (stopping before first 5). Given (2,1) return 7: you’d count 1,2,3,4,5,4,3 (stopping before second 2).:",
    stack
  );
  if (
    finger < 1 ||
    finger > 5 ||
    timesCount < 0 ||
    timesCount % 1 !== 0 ||
    finger % 1 !== 0
  )
    return "incorrect data";
  var count = 0;
  var end = true;
  var fingers = 1;
  var up = true;
  while (end) {
    console.log("fingers", fingers);
    if (fingers === finger) {
      if (timesCount) timesCount--;
      else break;
    }
    if (fingers === 5) up = false;
    else if (finger === 1) up = true;
    if (up) fingers++;
    else fingers--;
    count++;
    console.log("count", count);
  }
  //console.log(count);
  return count;
}
console.log(weakFinger(2, 1));
