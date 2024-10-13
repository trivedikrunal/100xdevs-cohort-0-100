let p = new Promise(function(resolve){
    

});

console.log(p); // output: Promise { <pending> }

let pr = new Promise(function(resolve){
    resolve("Hi, Krunal")

});
console.log(pr); //outuput: Promise { 'Hi, Krunal' }
