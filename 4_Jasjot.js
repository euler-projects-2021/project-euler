// Largest palindrome product

/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (num) => {
    var str = num.toString();
    if(str === str.split("").reverse().join(""))
    return true;
    else return false;
}
let max = 0;
for(let i = 999; i >= 100; i--){
    for(let  j = 999; j >= 100; j--){
        if(isPalindrome(i*j) && (i*j) > max){
            max = i*j;
        }
    }
}
console.log(max);