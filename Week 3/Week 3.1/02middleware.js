const express = require('express');
const app = express();

function userMiddleware(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "admin" && password != "admin"){
        res.status(403).json({"msg": "Wrong user"});
        return 
    }else{
        next();
    }

}
function kindanyMiddleware(req,res,next){
    const kindanyId = req.query.kindanyId;
    if(kindanyId != 1 && kindanyId != 2){
        res.status(411).json({"msg": "Worng Input"});
        return 
    }else{
        next();
    }

}

app.get('/health-checkup',userMiddleware, kindanyMiddleware, function(req,res){ //meddalware
    res.send("Your Health Fine!")
});
app.get('/kidany-checkup',userMiddleware, kindanyMiddleware, function(req,res){ //meddalware
    res.send("Your Kindany Fine!")
});
app.get('/heart-checkup',userMiddleware, function(req,res){ //meddalware 
    res.send("Your Heart Fine!")
});

app.listen(3000);