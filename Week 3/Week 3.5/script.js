function upper(){
    let x = document.getElementById('name');
    x.value = x.value.toUpperCase();
}
function mOve(obj){
    obj.innerHTML = "Thanks You";
}
function mOut(obj){
    obj.innerHTML = "Over Me";
}

document.getElementById('ck').addEventListener('click',function(){
    let name = document.getElementById('name').value;
    alert(name);
})

window.addEventListener('resize',function(){
    document.getElementById('showNumber').innerHTML = Math.random();
})

document.getElementById("smallB").addEventListener('click',function(){
    alert("White");
},false)
document.getElementById("bubbling").addEventListener('click',function(){
    alert("Orege");
},false)
document.getElementById("smallC").addEventListener('click',function(){
    alert("White");
},true)
document.getElementById("capchling").addEventListener('click',function(){
    alert("Orege");
},true)