function longestPalindrome(str) {
  console.log("longestPalindrome() data---", str);
  var palindrome = str[0];
  for (var iStart = 0; iStart < str.length; iStart++) {
    for (var iEnd = 0; iEnd < str.length; iEnd++) {
      var subStr = "";
      for (var i = iStart; i <= iEnd; i++) {
        subStr += str[i];
      }
      if (subStr.length <= palindrome.length) continue;
      for (var i = 0; i < subStr.length / 2; i++) {
        if (subStr[i] !== subStr[subStr.length - 1 - i]) break;
      }
      if (
        i === Math.ceil(subStr.length / 2) &&
        palindrome.length < subStr.length
      ) {
        palindrome = subStr;
      }
    }
  }
  return palindrome;
}
var str = "what up, dada?";
console.log(longestPalindrome(str));
var str = "not much";
console.log(longestPalindrome(str));
var str = "My favorite racecar e ded rupted!";
console.log(longestPalindrome(str));
var str = "racecar";
console.log(longestPalindrome(str));
