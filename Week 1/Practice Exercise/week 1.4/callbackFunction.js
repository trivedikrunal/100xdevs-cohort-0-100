function square(n){
    return n*n
}
function cube(n){
    return n*n*n
}

function sumOfSometing(a,b,fun){
    let val1 = fun(a); // function callback
    let val2 = fun(b); // function callback
    return val1 + val2
}
console.log(sumOfSometing(2,3,square));// Inside function callback Best Way
console.log(sumOfSometing(2,3,cube));
