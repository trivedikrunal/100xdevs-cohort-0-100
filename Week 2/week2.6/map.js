// given an array, give me back a new array in which every value is multiplied by 2
// [1,2, 3, 4, 5] <----- Input
// [2, 4, 6, 8, 10] <---- Output


//Normal Logic
let input = [1,2,3,4,5];
let newArray = [];

for(let i=0; i<input.length; i++){
    newArray.push(input[i] * 2)
}
console.log(newArray); // Output: [ 2, 4, 6, 8, 10 ]

let arr = [1,2,3,4,5]
let ans = arr.map((i)=>{
    return i * 2;
})
console.log(ans);

