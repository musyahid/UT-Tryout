function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
}

console.log(palindrome("Cigar? Toss it in a can. It is so tragic"));
console.log(palindrome("I did, did I?"));
console.log(palindrome("Red rum, sir, is murder"));
console.log(palindrome("Hello World"));