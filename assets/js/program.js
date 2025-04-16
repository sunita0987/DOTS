// 1. WAP to add three numbers using function =>
function addThreeNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
}
    console.log(addThreeNumbers(10, 20, 30));


//3.WAP  to check if a string is palindrome =>
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome("madam"));

//4. WAP to find the factorial of a number using function =>
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); 

//5.find the largest number in an array using function =>
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(findLargestNumber([12,45,78,23,89,34]));
