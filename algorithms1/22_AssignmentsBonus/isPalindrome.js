function isPalindrome(str) {
  console.log("isPalindrome() data---", str);
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) return false;
  }
  return true;
}
var str = "racecar";
console.log(isPalindrome(str));
var str = "Anna";
console.log(isPalindrome(str));
var str = "Madam, I'm Adam";
console.log(isPalindrome(str));
