// Normal logic
let arr = [1,2,3,4,5,6,7,8,9,10];
let newArr = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2==0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);


//Filter Using
let arrFilter = [1,2,3,4,5,6,7,8,9,10];
let ans = arrFilter.filter((n) =>{
        if(n % 2 == 0){
            return true
        }
        else{
            return false
        }
    }
);
console.log(ans);

//start name char A

let nameFilter = ["Krunal", "Yogesh", "Alka", "Ajali", "Maya", "Arati"];
let aName = nameFilter.filter((n) =>{
        if(n.startsWith("A")){
            return true
        }
        else{
            return false
        }
    }
);
console.log(aName);

