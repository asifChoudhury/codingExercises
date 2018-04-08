/*

    Given an array a that contains only numbers in the range from 1 to a.length, 
    find the first duplicate number for which the second occurrence has the minimal 
    index. In other words, if there are more than 1 duplicated numbers, return the 
    number for which the second occurrence has a smaller index than the second 
    occurrence of the other number does. If there are no such elements, return -1.

    Example
    -------
    For a = [2, 3, 3, 1, 5, 2], the output should be
    firstDuplicate(a) = 3.

    There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller 
    index than than second occurrence of 2 does, so the answer is 3.

    For a = [2, 4, 3, 5, 1], the output should be
    firstDuplicate(a) = -1.

*/

function firstDuplicate(a) {
    // if there's only one element or no element
    // print '-1'
    // then return
    if(a.length < 2) {
        console.log(-1);
        return;
    }

    let j;
    let duplicateIndex = [];
    // go thorugh the array and
    // if there are duplicates
    // push the matched element's index
    // to a separate array
    for(let i = 0; i < a.length; i++) {
        j = i + 1;
        while(j < a.length) {
            if(a[i] === a[j]) {
                duplicateIndex.push(j);

            }
            j++;
        }
    }
    // sort the index array
    // so that lower index will be at the beginning of the array
    duplicateIndex.sort((a,b) => a - b);

    if(duplicateIndex.length < 1) {
        console.log(-1);
        return;
    } else {
        console.log(a[duplicateIndex[0]]);
    }
}

firstDuplicate([2, 3, 3, 1, 5, 2]); // 3
firstDuplicate([2, 4, 3, 5, 1]);  // -1
firstDuplicate([1]); // -1
firstDuplicate([2, 2]); // 2
firstDuplicate([2, 1]); // -1
firstDuplicate([2, 1, 3]); // -1
firstDuplicate([2, 3, 3]); // 3
firstDuplicate([3, 3, 3]); // 3
firstDuplicate([8, 4, 6, 2, 6, 4, 7, 9, 5, 8]); // 6
firstDuplicate([10, 6, 8, 4, 9, 1, 7, 2, 5, 3]); // -1
firstDuplicate([1, 1, 2, 2, 1]); // -1
