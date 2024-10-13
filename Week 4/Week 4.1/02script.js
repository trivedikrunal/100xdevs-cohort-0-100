async function populateDiv(){
    const a = document.getElementById("principal").value;
    const b = document.getElementById("rate").value;
    const c = document.getElementById("time").value;
    
    const response = await fetch("http://localhost:8080/interest?principal=" + a + "&rate=" + b + "&time=" + c);
    const ans = await response.text();
    document.getElementById("interest").innerHTML = ans;
    }