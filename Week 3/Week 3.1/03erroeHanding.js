const express = require('express');
const app = express();
app.use(express.json());

app.get('/health-checkup', function(req,res){
    //arrys
    //{"kindany" : [1,4,2,3]}
    const kindany = req.body.kindany;
    const kindanyLength = kindany.length;

    res.send("you have " + kindanyLength + " kindanys.")
 
});

//Globle catch
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry Someting server"
    })

})

app.listen(3000);