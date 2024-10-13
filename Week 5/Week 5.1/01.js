function counterRead(){
    let btnTitle = document.getElementById("clickBtn").innerHTML;
    let counterChange = btnTitle.split(" ")[1];
    let counterAns = parseInt(counterChange) + 1;
    document.getElementById("clickBtn").innerHTML = "Counter " + counterAns;
}