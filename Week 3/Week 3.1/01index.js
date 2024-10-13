const express = require('express');
const app = express();

app.get('/health-checkup', function(req,res){
    const username = req.headers.username;
    const password = req.headers.password;
    const kindanyId = req.query.kindanyId;

    if(username != "admin" && password != "admin"){
        res.status(403).json({"msg": "Wrong user"});
        return 
    }
    if(kindanyId != 1 && kindanyId != 2){
        res.status(411).json({"msg": "Worng Input"});
        return 
    }
    res.json({
        msg: "Your kindany is fine!"
    })
});

app.listen(3000);