// 1. Write a function that finds the sum of two numbers
function sum(a, b){
    return console.log("Sum Value is: ",a+b ); 
}
sum(2,3)
// 2. Write another function that displays this result in a pretty format
function displaySum(a, b){
    let result = sum2(a,b)
    console.log("Result: ",result);
    
}
function sum2(a,b){
    return a+b
}
displaySum(2,4)
// 3. Write another function that takes this sum and prints it in passive tense
function printSumInPassiveTense(a, b) {
    const result = sum3(a, b);
    console.log(`The sum of ${a} and ${b} is calculated to be ${result}.`);
}
function sum3(a, b) {
    return a + b;
}
printSumInPassiveTense(5, 3); // Output: The sum of 5 and 3 is calculated to be 8.
