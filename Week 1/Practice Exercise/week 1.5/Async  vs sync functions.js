//Sync functions
function sync(n){
    ans = 0;
    for(let i=0;i<=n;i++){
        ans +=i;
    }
    return ans
}
console.log("Process syncSum Running");
console.log(sync(1000));
console.log("Process syncSum Commplted");


//ASync functions
function async(n){
    ans = 0;
    for(let i=0;i<=n;i++){
        ans +=i;
    }
    return ans
}

function asyncSum(){
    console.log(async(1000));
}
console.log("Process asyncSum Running");

setTimeout(asyncSum, 1000); //Calling Async function (setTimeout is async)
console.log("Process asyncSum Completed");
