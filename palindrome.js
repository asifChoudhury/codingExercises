/*
  Find palindrome
*/

isPalindrome = (str) => {
    //using built in JS String methods
    if(str === str.split('').reverse().join('')) {
        return true;
    }

    //without using default methods
    let j = str.length - 1;
    for(let i = 0; i < str.length / 2; i++) {
        if(str.charAt(i) !== str.charAt(j)) {
            return false;
        }
        j--;
    }

    return true;
}

let testStr = 'geeksforgeeks';
console.log(`'${testStr}' is a palindrome: ${isPalindrome(testStr)}`);

testStr = 'racecar';
console.log(`'${testStr}' is a palindrome: ${isPalindrome(testStr)}`);
