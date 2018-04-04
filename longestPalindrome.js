/*
    Find Longest  palindrome

    e.g. abccccdd : dccaccd (length 7)

*/

longestPalindrome = (str) => {
    let longestPalindrome = [];
    let haveNoPairs = new Set([]);

    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++) {
            if(str.charAt(i) === str.charAt(j)) {
                longestPalindrome.push(str.charAt(i)); // insert at the end
                longestPalindrome.unshift(str.charAt(i)); // insert at the beginning
                i = j;
                break;
            } else {
                haveNoPairs.add(str.charAt(i));
            }
        }
    }

    // insert the first lonely letter in the middle of the string
    if(longestPalindrome.length >= 2) {
        longestPalindrome.splice((longestPalindrome.length / 2), 0, haveNoPairs.values().next().value);
    }

    longestPalindrome = longestPalindrome.join('');

    console.log(`Longest palindrome in '${str}' is '${longestPalindrome}'`);
    console.log(``);
}

longestPalindrome('abccccdd');
longestPalindrome('abcd');
longestPalindrome('abbcdde');
