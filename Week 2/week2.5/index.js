const express = require("express");

const app = express();

function sum(n){
    let ans = 0;
    for(let i=1; i<=n; i++){
        ans = ans + i;
    }
    return ans;
}

app.get("/",function(req,res){
    let n = req.query.n;
    let ans = sum(n);

    res.send('Your answer is: ' + ans);
})

app.listen(3000);

