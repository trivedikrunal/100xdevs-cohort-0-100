// Without await
function normalPromise(){
    let p = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Code Done aait");
        },3000)
    });
    return p
}

function main(){
    normalPromise().then(function(value){
        console.log(value);
        console.log("@@@");
        
        
    });
}
main()



//Use Await

function normalPromise2(){
    let p2 = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Code Done 1");
        },3000)
    });
    return p2
}
async function main2(){
    let value2 = await normalPromise2();
    console.log(value2);
    console.log("###");

}
main2()