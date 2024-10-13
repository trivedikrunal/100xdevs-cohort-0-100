// 1. Write the program to greet a person given their first and last name
let firstNmae = prompt("Enter First Name: ")
let lastNmae = prompt("Enter Last Name: ")
console.log("Hi, My full name is" + firstNmae + lastNmae);

// 2. Write a program that greets a person based on their gender. (If else)
let onlyName = prompt("Enter your Name: ")
let gender = prompt("Enter your Gender (Male or Female): ").toLocaleLowerCase()
if(gender == "male"){
    console.log("Hi, Mr." + onlyName + " is Male");
}
if(gender == "female"){
    console.log("Hi, Ms." + onlyName + " is Female"); 
} 
else{
    console.log("Plses Enter your vaild gender Try again!"); 
}

// 3. Write a program that counts from O - 1000 and prints (for loop)
let count = 0
for(let i = 1; i<=1000; i++){
    count = count + i 
    console.log(i + " Time Count: " + count);
}
console.log(("Count for 0-1000 is: " + count));
