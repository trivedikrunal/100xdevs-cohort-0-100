// 1. Write a program prints all the even numbers in an array
let numberList = [1,2,3,4,5,6,7,8,9,10]
let evenList = []
for(let i = 0; i < numberList.length; i++){
    if(numberList[i] % 2 == 0){
        evenList.push(numberList[i])
    }
}
console.log(evenList);

// 2. Write a program to print the biggest number in an array
let arrayList = [1,2,3,4,55,66,88,11,22,33,44]
const biggestNumber = Math.max.apply(null,arrayList)
console.log(biggestNumber);

    // another logic
    let arrayList2 = [1,2,3,4,55,66,88,11,22,33,44]
    let maxNumber = arrayList2[0]
    for(let i=0; i<arrayList2.length; i++){
        if(arrayList2[i] > maxNumber){
            maxNumber = arrayList2[i]
        }
    }
    console.log("The biggest number is: ", maxNumber);
    


 

// 3. Write a program that prints all the male people's first name given a complex object
const allUser = [{firstName : "Krunal", gender : "male"},{firstName : "Pooja", gender : "female"},{firstName : "Yogesh", gender : "male"}]
for(let i = 0; i < allUser.length; i++){
    if(allUser[i]["gender"] == "male"){
        console.log(allUser[i]["firstName"]);
    }
}
// 4. Write a program that reverses all the elements of an array
const startList = [1,23,44,5,66]
let reversList = startList.reverse()
console.log(reversList);
 