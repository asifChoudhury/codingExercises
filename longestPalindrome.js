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

//==============================================================================================================

// Another Solution without using set
longestPalindrome = (str) => {
    let longestPalindrome = '';
    console.log(`Get longest palindrome for '${str}'`);
    let uniqueLetters = getUniqueLetters(str);
    console.log(`Unique Letters: ${uniqueLetters}`);

    let noPairLetters = [];
    let count = 0;
    console.log(`Letter counts - `);
    for(let i = 0; i < uniqueLetters.length; i++) {
        count = getNumOccurences(str, uniqueLetters.charAt(i));
        console.log(`${uniqueLetters.charAt(i)} : ${count}`);

        if(count % 2 === 0) {
            let temp = 1;
            while(temp <= count) {
                longestPalindrome = uniqueLetters.charAt(i) + longestPalindrome + uniqueLetters.charAt(i);
                temp += 2;
            }
        } else {
            noPairLetters += uniqueLetters.charAt(i);
        }
    }

    // insert the first lonely char
    if(longestPalindrome.length >= 3) {
        let res = longestPalindrome.split('');
        res.splice((longestPalindrome.length / 2), 0, noPairLetters.charAt(0));
        longestPalindrome = res.join('');
    } else {
        longestPalindrome = 'No palindrome';
    }

    console.log(`Longest palindrome for '${str}' is: ${longestPalindrome}`);
    console.log(``);
}

getUniqueLetters = (str) => {
    let uniqueLetters = '';

    for(let i = 0; i < str.length; i++) {
        if(uniqueLetters.indexOf(str.charAt(i)) === - 1) {
            uniqueLetters += str.charAt(i);
        }
    }
    return uniqueLetters;
}

getNumOccurences = (str, letterToMatch) => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === letterToMatch) {
            count++;
        }
    }

    return count;
}

longestPalindrome('abccccdd');
longestPalindrome('abcd');
longestPalindrome('abbcdde');
