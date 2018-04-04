/*
    Find Longest substring palindrome
    
    e.g. forgeeksskeegfor : geeksskeeg
*/

longestPalindromeSubstr = (str) => {
    let j = str.length - 1;
    let longestPalindromeSubstr = str;

    for(let i = 0; i < str.length / 2; i++) {
        longestPalindromeSubstr = str.slice(i, j + 1); //on each iteration select a substring by removing the first and last letter

        if(isPalindrome(longestPalindromeSubstr)) {
            console.log(`Longest substring palindrome for '${str}' is: ${longestPalindromeSubstr}`);
            return;
        }
        j--;
    }
}

isPalindrome = (str) => {
    let j = str.length - 1;
    for(let i = 0; i < str.length / 2; i++) {
        if(str.charAt(i) !== str.charAt(j)) {
            return false
        }
        j--;
    }

    return true;
}

longestPalindromeSubstr('forgeeksskeegfor'); // outputs geeksskeeg
